import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  opacity: 0.9;

  p {
    margin-bottom: 1.5rem;
  }
`;

const AchievementList = styled(motion.ul)`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled(motion.li)`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '🏆';
    font-size: 1.5rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Iris
        </SectionTitle>
        <ContentGrid>
          <StoryText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              As a junior libero at my high school, I've dedicated myself to mastering the art of defense in volleyball. 
              My journey began three years ago when I first discovered my passion for the sport. Since then, I've worked 
              tirelessly to develop my skills and become a reliable defensive specialist for my team.
            </p>
            <p>
              My role as a libero has taught me the importance of quick thinking, precise movements, and effective 
              communication on the court. I take pride in my ability to read the game and make split-second decisions 
              that can turn the tide of a match.
            </p>
          </StoryText>
          <AchievementList
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AchievementItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Team Captain 2023
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Best Libero Award - Regional Tournament
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Academic All-State Team
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              School Record for Digs in a Season
            </AchievementItem>
          </AchievementList>
        </ContentGrid>
      </AboutSection>
    </AboutContainer>
  );
};

export default About; 