import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  margin-bottom: 20em;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 30em;
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

const GlowingHR = styled.hr`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--primary-color) 20%,
    var(--primary-color) 80%,
    transparent 100%
  );
  border: none;
  margin: 2em 0;
  position: relative;
  box-shadow: 0 0 20px var(--primary-color);
  opacity: 0.5;
`;

const ContentGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  margin-bottom: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

const LinkCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2em;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LinkCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const LinkCardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const LinkCardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LinkCardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  text-align: center;
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
              <ProfilePicture src="/profile.jpeg" alt="Iris Arlint" />
            </ProfilePictureContainer>
          </HeroImage>
        </HeroContent>
      </HeroSection>

      <GlowingHR />

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

      <LinkCardsGrid>
        <LinkCard
          href="/gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <LinkCardIcon>📸</LinkCardIcon>
          <LinkCardTitle>Photo Gallery</LinkCardTitle>
          <LinkCardDescription>View highlights and memorable moments from matches and tournaments</LinkCardDescription>
        </LinkCard>

        <LinkCard
          href="/stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <LinkCardIcon>📊</LinkCardIcon>
          <LinkCardTitle>Statistics</LinkCardTitle>
          <LinkCardDescription>Detailed performance metrics and achievements throughout my volleyball career</LinkCardDescription>
        </LinkCard>

        <LinkCard
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <LinkCardIcon>✉️</LinkCardIcon>
          <LinkCardTitle>Contact</LinkCardTitle>
          <LinkCardDescription>Get in touch for recruitment inquiries or collaboration opportunities</LinkCardDescription>
        </LinkCard>
      </LinkCardsGrid>
    </HomeContainer>
  );
};

export default Home; 