import styled from '@emotion/styled';

const GlowingHR = styled.hr`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #FF6B6B 20%,
    #4ECDC4 80%,
    transparent 100%
  );
  background-size: 200% 100%;
  border: none;
  margin: 2em 0;
  position: relative;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.5), 0 0 20px rgba(78, 205, 196, 0.5);
  opacity: 0.8;
  animation: glowPulse 5s ease-in-out infinite, bounceGradient 5s ease-in-out infinite;

  @keyframes glowPulse {
    0% {
      opacity: 0.8;
      box-shadow: 0 0 20px rgba(255, 107, 107, 0.5), 0 0 20px rgba(78, 205, 196, 0.5);
    }
    50% {
      opacity: 1;
      box-shadow: 0 0 30px rgba(255, 107, 107, 0.7), 0 0 30px rgba(78, 205, 196, 0.7);
    }
    100% {
      opacity: 0.8;
      box-shadow: 0 0 20px rgba(255, 107, 107, 0.5), 0 0 20px rgba(78, 205, 196, 0.5);
    }
  }

  @keyframes bounceGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default GlowingHR; 