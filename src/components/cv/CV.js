import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import cvData from '../../core/data/cv.json';
import html2pdf from 'html2pdf.js';

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: ${props => props.isModern ? '"Segoe UI", sans-serif' : '"Times New Roman", serif'};
  color: ${props => props.isModern ? '#2d3748' : '#000'};
  background: ${props => props.isModern ? '#f7fafc' : '#fff'};
`;

const Header = styled.header`
  text-align: ${props => props.isModern ? 'left' : 'center'};
  margin-bottom: 2rem;
  border-bottom: ${props => props.isModern ? '2px solid #4a5568' : '1px solid #000'};
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
  const [isModern, setIsModern] = useState(true);
  const { personalInfo, experience, education, skills } = cvData;
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
          <ActionButton isModern={isModern} onClick={() => setIsModern(!isModern)}>
            Switch to {isModern ? 'Classic' : 'Modern'} Theme
          </ActionButton>
         <ActionButton isModern={isModern} onClick={downloadPDF}>
            Downloa d PDF
          </ActionButton>
        </ButtonContainer>
      )}
      
      <CVContainer ref={cvRef} isModern={isModern}>
        <Header isModern={isModern}>
          <Name isModern={isModern}>{personalInfo.name}</Name>
          <Title isModern={isModern}>{personalInfo.title}</Title>
          <p>{personalInfo.email} | {personalInfo.location}</p>
          <p>{personalInfo.bio}</p>
        </Header>

        <Section>
          <SectionTitle isModern={isModern}>Experience</SectionTitle>
          {experience.map((exp, index) => (
            <ExperienceItem key={index} isModern={isModern}>
              <div>
                <Company isModern={isModern}>{exp.company}</Company>
                <Period isModern={isModern}>{exp.period}</Period>
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
          <SectionTitle isModern={isModern}>Education</SectionTitle>
          {education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.degree} in {edu.field}</h4>
              <p>{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </Section>

        <Section>
          <SectionTitle isModern={isModern}>Skills</SectionTitle>
          <SkillsContainer>
            <div>
              <h4>Technical Skills</h4>
              <SkillsList isModern={isModern}>
                {skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillsList>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <SkillsList isModern={isModern}>
                {skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillsList>
            </div>
          </SkillsContainer>
        </Section>
      </CVContainer>
    </div>
  );
};

export default CV;