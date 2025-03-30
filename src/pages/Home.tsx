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
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 6rem;
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`;

const HeroContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
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
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProfilePictureContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  animation: rotate 5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--glass-bg);
  transform: rotate(0deg);
  animation: counter-rotate 5s linear infinite;

  @keyframes counter-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(var(--primary-color-rgb), 0.2) 0%, rgba(var(--primary-color-rgb), 0) 70%);
  filter: blur(20px);
  z-index: -1;
`;

const ContentGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const ContentSection = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 15px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: var(--text-color);
  margin-bottom: 0.8rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
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
          <div>
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
              Libero • Class of 2026 • Zootown Volleyball Club 18 Platinum
            </HeroSubtitle>
          </div>

          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlowEffect />
            <ProfilePictureContainer>
              <ProfilePicture src="/src/assets/profile.jpeg" alt="Iris Arlint" />
            </ProfilePictureContainer>
          </HeroImage>

          <ContentGrid>
            <ContentSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <SectionTitle>About Me</SectionTitle>
              <SectionContent>
                Passionate libero with a strong defensive mindset and excellent court awareness. Committed to continuous improvement and team success.
              </SectionContent>
            </ContentSection>

            <ContentSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SectionTitle>Achievements</SectionTitle>
              <SectionContent>
                • 2023 Montana State Championship Runner-up
                • 2023 AAU Nationals Qualifier
                • Multiple tournament MVP awards
              </SectionContent>
            </ContentSection>

            <ContentSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <SectionTitle>Skills</SectionTitle>
              <SectionContent>
                • Exceptional serve receive
                • Strong defensive positioning
                • Quick lateral movement
                • Effective communication
              </SectionContent>
            </ContentSection>
          </ContentGrid>
        </HeroContent>
      </HeroSection>

      <StatsGrid>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <StatNumber>18</StatNumber>
          <StatLabel>Club Team</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <StatNumber>2026</StatNumber>
          <StatLabel>Graduation Year</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <StatNumber>5'4"</StatNumber>
          <StatLabel>Height</StatLabel>
        </StatCard>
      </StatsGrid>
    </HomeContainer>
  );
};

export default Home; 