import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  height: 400px;
  background: var(--glass-bg);
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    opacity: 0.1;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.8;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Iris Arlint
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Libero • High School Junior • Volleyball Athlete
          </HeroSubtitle>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </HeroSection>

      <StatsGrid>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StatNumber>3</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <StatNumber>500+</StatNumber>
          <StatLabel>Digs</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <StatNumber>95%</StatNumber>
          <StatLabel>Serve Receive</StatLabel>
        </StatCard>
      </StatsGrid>
    </HomeContainer>
  );
};

export default Home; 