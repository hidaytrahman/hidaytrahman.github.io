import styled from 'styled-components';

const GlassPanel = styled.section`
  position: relative;
  display: block;
  background: rgba(14, 21, 36, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 32px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(138, 180, 255, 0.25);
  }
`;

export default GlassPanel;
