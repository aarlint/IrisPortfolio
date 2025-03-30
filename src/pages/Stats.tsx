import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const StatsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsSection = styled.section`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.9;
`;

const StatDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-top: 1rem;
`;

const SeasonStats = styled.div`
  margin-top: 3rem;
`;

const SeasonTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StatsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color: var(--text-color);
  border-bottom: 1px solid var(--glass-border);
`;

const TableCell = styled.td`
  padding: 1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--glass-border);
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  background: ${props => props.isActive ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.isActive ? 'white' : 'var(--text-color)'};
  border: 1px solid var(--glass-border);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: ${props => props.isActive ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const Stats = () => {
  const [activeYear, setActiveYear] = useState('2024-2025');

  const years = [
    { id: '2024-2025', label: 'Junior 2024-2025' },
    { id: '2023-2024', label: 'Sophomore 2023-2024' },
    { id: '2022-2023', label: 'Freshman 2022-2023' }
  ];

  const renderStats = () => {
    switch (activeYear) {
      case '2024-2025':
        return (
          <>
            <StatsGrid>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <StatValue>27</StatValue>
                <StatLabel>Service Aces</StatLabel>
                <StatDescription>Total service aces for the season</StatDescription>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <StatValue>349</StatValue>
                <StatLabel>Digs</StatLabel>
                <StatDescription>Total digs for the season</StatDescription>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <StatValue>40</StatValue>
                <StatLabel>Assists</StatLabel>
                <StatDescription>Total assists for the season</StatDescription>
              </StatCard>
            </StatsGrid>

            <SeasonStats>
              <SeasonTitle>Junior Year (2024-2025) Statistics</SeasonTitle>
              <StatsTable>
                <thead>
                  <tr>
                    <TableHeader>Category</TableHeader>
                    <TableHeader>Total</TableHeader>
                    <TableHeader>Average per Set</TableHeader>
                    <TableHeader>Best Performance</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableCell>Digs</TableCell>
                    <TableCell>349</TableCell>
                    <TableCell>3.2/set</TableCell>
                    <TableCell>28 vs. Central High</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Service Aces</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>0.25/set</TableCell>
                    <TableCell>4 vs. North High</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Kills</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>0.03/set</TableCell>
                    <TableCell>2 vs. East High</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Assists</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>0.37/set</TableCell>
                    <TableCell>5 vs. West High</TableCell>
                  </tr>
                </tbody>
              </StatsTable>
            </SeasonStats>
          </>
        );
      case '2023-2024':
        return (
          <SeasonStats>
            <SeasonTitle>Sophomore Year (2023-2024) Statistics</SeasonTitle>
            <p style={{ textAlign: 'center', color: 'var(--text-color)', opacity: 0.7 }}>
              Statistics coming soon...
            </p>
          </SeasonStats>
        );
      case '2022-2023':
        return (
          <SeasonStats>
            <SeasonTitle>Freshman Year (2022-2023) Statistics</SeasonTitle>
            <p style={{ textAlign: 'center', color: 'var(--text-color)', opacity: 0.7 }}>
              Statistics coming soon...
            </p>
          </SeasonStats>
        );
      default:
        return null;
    }
  };

  return (
    <StatsContainer>
      <StatsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Performance Statistics
        </SectionTitle>
        
        <TabContainer>
          {years.map((year) => (
            <Tab
              key={year.id}
              isActive={activeYear === year.id}
              onClick={() => setActiveYear(year.id)}
            >
              {year.label}
            </Tab>
          ))}
        </TabContainer>

        {renderStats()}
      </StatsSection>
    </StatsContainer>
  );
};

export default Stats; 