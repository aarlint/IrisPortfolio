import * as React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaVolleyballBall, FaVideo } from 'react-icons/fa';
import recruitingProfile from '../assets/Iris Arlints Volleyball Recruiting Profile FieldLevel.mp4';
import stateChampionship from '../assets/Watch State Championship Final Game 2024 - Iris Arlints Volleyba.mp4';
import powerScrimmageDigs from '../assets/Watch Digs from Power Scrimmage - Iris Arlints Volleyball Videos.mp4';
import clubTournament from '../assets/Watch HIGHLIGHTS club tourney 2025 - Iris Arlints Volleyball Vid.mp4';
import digs from '../assets/Watch Digs - Iris Arlints Volleyball Videos FieldLevel.mp4';
import digs2 from '../assets/Watch Digs - Iris Arlints Volleyball Videos FieldLevel-01.mp4';

const GalleryContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GallerySection = styled.section`
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:hover video {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
  z-index: 2;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 1px solid var(--glass-border);
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const Gallery = () => {
  const categories = ['All', 'Game Footage', 'Highlights', 'Tournaments'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  // Mock data for gallery items
  const galleryItems = [
    {
      id: 1,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: recruitingProfile,
      title: 'Volleyball Recruiting Profile',
      category: 'Highlights'
    },
    {
      id: 2,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: stateChampionship,
      title: 'State Championship Final Game 2024',
      category: 'Game Footage'
    },
    {
      id: 3,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: powerScrimmageDigs,
      title: 'Digs from Power Scrimmage',
      category: 'Highlights'
    },
    {
      id: 4,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: clubTournament,
      title: 'Club Tournament Highlights 2025',
      category: 'Tournaments'
    },
    {
      id: 5,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: digs,
      title: 'Digs Highlights',
      category: 'Highlights'
    },
    {
      id: 6,
      type: 'video',
      image: 'https://placehold.co/600x600',
      videoUrl: digs2,
      title: 'Digs Highlights 2',
      category: 'Highlights'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <GalleryContainer>
      <GallerySection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </SectionTitle>
        
        <CategoryTabs>
          {categories.map(category => (
            <Tab
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Tab>
          ))}
        </CategoryTabs>

        <GalleryGrid>
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.type === 'video' ? (
                <VideoPlayer
                  src={item.videoUrl}
                  poster={item.image}
                  controls
                  preload="metadata"
                />
              ) : (
                <ItemImage src={item.image} alt={item.title} />
              )}
              <ItemOverlay>
                {item.type === 'photo' ? <FaVolleyballBall /> : <FaVideo />}
                {item.title}
              </ItemOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GallerySection>
    </GalleryContainer>
  );
};

export default Gallery; 