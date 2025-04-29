import React from 'react';
import styled from 'styled-components';
import cvData from '../../core/data/cv.json';

const CVContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const CV = () => {
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <CVContainer>
      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        <h3>{personalInfo.name}</h3>
        <p>{personalInfo.title}</p>
        <p>{personalInfo.location}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.bio}</p>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.position} at {exp.company}</h3>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree} in {edu.field}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <div>
          <h3>Technical Skills</h3>
          <ul>
            {skills.technical.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            {skills.soft.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </Section>
    </CVContainer>
  );
};

export default CV;