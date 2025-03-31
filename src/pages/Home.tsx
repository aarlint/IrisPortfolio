import styled from '@emotion/styled';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaTrophy, FaUserGraduate, FaEnvelope, FaChartBar, FaImages, FaChevronDown } from 'react-icons/fa';
import { MdSportsVolleyball } from 'react-icons/md';
import GlowingHR from '../components/GlowingHR';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  margin-bottom: 20em;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 80px;
  position: relative;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
  padding: 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
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
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const LinkCardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
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

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 5rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--text-color);
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 10;
  width: 100%;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 2px solid currentColor;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Home = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest < 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeContainer id="home">
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
          <SectionTitle>
            <FaUserGraduate /> About Me
          </SectionTitle>
          <SectionContent>
            Passionate libero with a strong defensive mindset and excellent court awareness. Committed to continuous improvement and team success.
          </SectionContent>
        </ContentSection>

        <ContentSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionTitle>
            <FaTrophy /> Achievements
          </SectionTitle>
          <SectionContent>
            <ul>
              <li>2023 Montana State Championship Runner-up</li>
              <li>2023 AAU Nationals Qualifier</li>
              <li>Multiple tournament MVP awards</li>
            </ul>
          </SectionContent>
        </ContentSection>

        <ContentSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <SectionTitle>
            <MdSportsVolleyball /> Skills
          </SectionTitle>
          <SectionContent>
            <ul>
              <li>Exceptional serve receive</li>
              <li>Strong defensive positioning</li>
              <li>Quick lateral movement</li>
              <li>Effective communication</li>
            </ul>
          </SectionContent>
        </ContentSection>
      </ContentGrid>

      <LinkCardsGrid>
        <LinkCard
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <LinkCardIcon>
            <FaImages />
          </LinkCardIcon>
          <LinkCardTitle>Media Gallery</LinkCardTitle>
          <LinkCardDescription>View highlights and memorable moments from matches and tournaments</LinkCardDescription>
        </LinkCard>

        <LinkCard
          href="#stats"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <LinkCardIcon>
            <FaChartBar />
          </LinkCardIcon>
          <LinkCardTitle>Statistics</LinkCardTitle>
          <LinkCardDescription>Detailed performance metrics and achievements throughout my volleyball career</LinkCardDescription>
        </LinkCard>

        <LinkCard
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <LinkCardIcon>
            <FaEnvelope />
          </LinkCardIcon>
          <LinkCardTitle>Contact</LinkCardTitle>
          <LinkCardDescription>Get in touch for recruitment inquiries or collaboration opportunities</LinkCardDescription>
        </LinkCard>
      </LinkCardsGrid>

      <ScrollIndicator
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollArrow
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChevronDown />
        </ScrollArrow>
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home; 