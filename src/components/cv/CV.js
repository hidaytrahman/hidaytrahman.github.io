import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import cvData from '../../core/data/cv.json';
import html2pdf from 'html2pdf.js';

const getTemplateStyles = (template) => {
  switch(template) {
    case 'modern':
      return {
        fontFamily: '"Segoe UI", sans-serif',
        color: '#2d3748',
        background: '#f7fafc'
      };
    case 'classic':
      return {
        fontFamily: '"Times New Roman", serif',
        color: '#000',
        background: '#fff'
      };
    case 'minimal':
      return {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        color: '#1a202c',
        background: '#fff'
      };
    case 'creative':
      return {
        fontFamily: '"Poppins", sans-serif',
        color: '#2b6cb0',
        background: '#ebf8ff'
      };
    default:
      return {
        fontFamily: '"Segoe UI", sans-serif',
        color: '#2d3748',
        background: '#f7fafc'
      };
  }
};

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: ${props => getTemplateStyles(props.template).fontFamily};
  color: ${props => getTemplateStyles(props.template).color};
  background: ${props => getTemplateStyles(props.template).background};
`;

const Header = styled.header`
  text-align: ${props => props.template === 'classic' ? 'center' : 'left'};
  margin-bottom: 2rem;
  border-bottom: ${props => {
    switch(props.template) {
      case 'modern': return '2px solid #4a5568';
      case 'minimal': return '1px solid #e2e8f0';
      case 'creative': return '3px solid #2b6cb0';
      default: return '1px solid #000';
    }
  }};
  padding-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: ${props => props.isModern ? '#2d3748' : '#000'};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: ${props => props.isModern ? '#4a5568' : '#333'};
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.isModern ? '#2d3748' : '#000'};
  border-bottom: ${props => props.isModern ? '2px solid #4a5568' : '1px solid #000'};
  padding-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: ${props => props.isModern ? '1fr' : '1fr 2fr'};
  gap: 1rem;
`;

const Company = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: ${props => props.isModern ? '#4a5568' : '#000'};
`;

const Period = styled.p`
  margin: 0.25rem 0;
  color: ${props => props.isModern ? '#718096' : '#666'};
  font-style: italic;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillsList = styled.ul`
  list-style: ${props => props.isModern ? 'none' : 'disc'};
  padding-left: ${props => props.isModern ? '0' : '1.5rem'};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.isModern ? '#4a5568' : '#000'};
  color: white;
  border: none;
  border-radius: ${props => props.isModern ? '0.5rem' : '0'};
  cursor: pointer;
`;

const CV = ({ hideControls, onDownload }) => {
  const [template, setTemplate] = useState('modern');
  const { personalInfo, experience, education, skills, projects, certifications, publications, awards } = cvData;
  const cvRef = React.useRef();

  const downloadPDF = useCallback(() => {
    const element = cvRef.current;
    const opt = {
      margin: 1,
      filename: 'hidayt-rahman-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }, []) ;

  // Expose downloadPDF function through onDownload prop
  React.useEffect(() => {
    if (onDownload && typeof onDownload === 'function') {
      onDownload(() => downloadPDF());
    }
  }, [onDownload, downloadPDF]);

  return (
    <div>
      {!hideControls && (
        <ButtonContainer>
          <select value={template} onChange={(e) => setTemplate(e.target.value)} style={{ padding: '0.5rem', marginRight: '1rem' }}>
            <option value="modern">Modern Template</option>
            <option value="classic">Classic Template</option>
            <option value="minimal">Minimal Template</option>
            <option value="creative">Creative Template</option>
          </select>
          <ActionButton template={template} onClick={downloadPDF}>
            Download PDF
          </ActionButton>
        </ButtonContainer>
      )}
      
      <CVContainer ref={cvRef} template={template}>
        <Header template={template}>
          <Name template={template}>{personalInfo.name}</Name>
          <Title template={template}>{personalInfo.title}</Title>
          <p>{personalInfo.email} | {personalInfo.location}</p>
          <p>{personalInfo.bio}</p>
        </Header>

        <Section>
          <SectionTitle template={template}>Experience</SectionTitle>
          {experience.map((exp, index) => (
            <ExperienceItem key={index} template={template}>
              <div>
                <Company template={template}>{exp.company}</Company>
                <Period template={template}>{exp.period}</Period>
              </div>
              <div>
                <h4>{exp.position}</h4>
                <p>{exp.description}</p>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </ExperienceItem>
          ))}
        </Section>

        <Section>
          <SectionTitle template={template}>Education</SectionTitle>
          {education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.degree} in {edu.field}</h4>
              <p>{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </Section>

        <Section>
          <SectionTitle template={template}>Skills</SectionTitle>
          <SkillsContainer>
            <div>
              <h4>Technical Skills</h4>
              <SkillsList template={template}>
                {skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillsList>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <SkillsList template={template}>
                {skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillsList>
            </div>
            <div>
              <h4>Tools</h4>
              <SkillsList template={template}>
                {skills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </SkillsList>
            </div>
          </SkillsContainer>
        </Section>

        <Section>
          <SectionTitle template={template}>Projects</SectionTitle>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <ul>
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section>
          <SectionTitle template={template}>Certifications</SectionTitle>
          {certifications.map((cert, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h4>{cert.name}</h4>
              <p>{cert.issuer} - {cert.date}</p>
            </div>
          ))}
        </Section>

        <Section>
          <SectionTitle template={template}>Publications</SectionTitle>
          {publications.map((pub, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h4>{pub.title}</h4>
              <p>{pub.publisher} - {pub.date}</p>
            </div>
          ))}
        </Section>

        <Section>
          <SectionTitle template={template}>Awards & Achievements</SectionTitle>
          {awards.map((award, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h4>{award.title}</h4>
              <p>{award.issuer} - {award.date}</p>
              <p>{award.description}</p>
            </div>
          ))}
        </Section>
      </CVContainer>
    </div>
  );
};

export default CV;