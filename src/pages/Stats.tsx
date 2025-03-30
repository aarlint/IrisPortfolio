import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

const Stats = () => {
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
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatValue>95%</StatValue>
            <StatLabel>Serve Receive</StatLabel>
            <StatDescription>Consistent and reliable serve receive percentage</StatDescription>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StatValue>4.2</StatValue>
            <StatLabel>Digs per Set</StatLabel>
            <StatDescription>Average number of successful digs per set</StatDescription>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatValue>2.8</StatValue>
            <StatLabel>Pass Rating</StatLabel>
            <StatDescription>Average pass rating on a 3.0 scale</StatDescription>
          </StatCard>
        </StatsGrid>

        <SeasonStats>
          <SeasonTitle>2023 Season Highlights</SeasonTitle>
          <StatsTable>
            <thead>
              <tr>
                <TableHeader>Category</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader>Average</TableHeader>
                <TableHeader>Best Performance</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Digs</TableCell>
                <TableCell>450</TableCell>
                <TableCell>4.2/set</TableCell>
                <TableCell>28 vs. Central High</TableCell>
              </tr>
              <tr>
                <TableCell>Serve Receive</TableCell>
                <TableCell>380</TableCell>
                <TableCell>3.5/set</TableCell>
                <TableCell>42 vs. East High</TableCell>
              </tr>
              <tr>
                <TableCell>Pass Rating</TableCell>
                <TableCell>2.8</TableCell>
                <TableCell>2.8/set</TableCell>
                <TableCell>3.0 vs. West High</TableCell>
              </tr>
              <tr>
                <TableCell>Service Aces</TableCell>
                <TableCell>25</TableCell>
                <TableCell>0.2/set</TableCell>
                <TableCell>4 vs. North High</TableCell>
              </tr>
            </tbody>
          </StatsTable>
        </SeasonStats>
      </StatsSection>
    </StatsContainer>
  );
};

export default Stats; 