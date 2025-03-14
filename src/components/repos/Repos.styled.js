import styled from 'styled-components';
import { fadeInDownAnimation } from '../styled/Animation';

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => `rgba(${theme.colors.cardRGB}, 0.1)`};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 10px 18px;
  transition: all 0.3s ease;
  animation: 1s ${fadeInDownAnimation};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(80, 80, 80, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => `rgba(${theme.colors.cardRGB}, 0.2)`};
  }

  .project-header {
    margin-bottom: 16px;
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
  }

  .project-description {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .project-links {
    display: flex;
    gap: 12px;
    margin-top: auto;
  }

  .project-link {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    text-decoration: none;

    &.primary {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      
      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
      }
    }

    &.secondary {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }
`;