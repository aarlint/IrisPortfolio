import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { statsData, GameStats } from '../data/stats';

const StatsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 80px;
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

const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  margin-bottom: 2rem;
  height: 400px;
  width: 100%;
  min-width: 300px;
  max-width: 100%;
  overflow: hidden;
`;

const ChartTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const YearComparisonSection = styled(motion.section)`
  padding: 2rem;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  margin-bottom: 2rem;
`;

const ComparisonTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const ComparisonCard = styled.div`
  padding: 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  width: 100%;
  overflow: hidden;
`;

const ComparisonValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ComparisonLabel = styled.div`
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.9;
  text-align: center;
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

const Stats = () => {
  const [activeYear, setActiveYear] = useState('2024-2025');

  const years = [
    { id: '2022-2023', label: 'Freshman 2022-2023' },
    { id: '2023-2024', label: 'Sophomore 2023-2024' },
    { id: '2024-2025', label: 'Junior 2024-2025' }
  ];

  const getCurrentSeasonData = () => {
    return statsData.find(season => season.year === activeYear)?.games || [];
  };

  const calculateSeasonAverages = (year: string) => {
    const games = statsData.find(season => season.year === year)?.games || [];
    if (games.length === 0) return null;
    
    return {
      year,
      digs: games.reduce((sum, game) => sum + game.digs, 0) / games.length,
      serviceAces: games.reduce((sum, game) => sum + game.serviceAces, 0) / games.length,
      assists: games.reduce((sum, game) => sum + game.assists, 0) / games.length,
      kills: games.reduce((sum, game) => sum + game.kills, 0) / games.length
    };
  };

  const yearOverYearData = statsData
    .map(season => calculateSeasonAverages(season.year))
    .filter(Boolean)
    .sort((a, b) => a!.year.localeCompare(b!.year));

  const renderYearOverYearComparison = () => {
    return (
      <YearComparisonSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ComparisonTitle>Year Over Year Progression</ComparisonTitle>
        
        <ComparisonGrid>
          <ComparisonCard>
            <ComparisonValue>+25%</ComparisonValue>
            <ComparisonLabel>Digs Improvement</ComparisonLabel>
            <ChartContainer style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearOverYearData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                    tickFormatter={(value) => value.split('-')[0]}
                    height={40}
                  />
                  <YAxis 
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'var(--text-color)'
                    }}
                    labelStyle={{ color: 'var(--text-color)' }}
                    labelFormatter={(value) => `Season ${value}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="digs" 
                    stroke="var(--primary-color)" 
                    strokeWidth={2}
                    dot={{ fill: 'var(--primary-color)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </ComparisonCard>

          <ComparisonCard>
            <ComparisonValue>+150%</ComparisonValue>
            <ComparisonLabel>Service Aces Growth</ComparisonLabel>
            <ChartContainer style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearOverYearData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                    tickFormatter={(value) => value.split('-')[0]}
                    height={40}
                  />
                  <YAxis 
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'var(--text-color)'
                    }}
                    labelStyle={{ color: 'var(--text-color)' }}
                    labelFormatter={(value) => `Season ${value}`}
                  />
                  <Bar 
                    dataKey="serviceAces" 
                    fill="var(--primary-color)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </ComparisonCard>

          <ComparisonCard>
            <ComparisonValue>+100%</ComparisonValue>
            <ComparisonLabel>Overall Skill Growth</ComparisonLabel>
            <ChartContainer style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={yearOverYearData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                  <PolarAngleAxis 
                    dataKey="year"
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                    tickFormatter={(value) => value.split('-')[0]}
                  />
                  <PolarRadiusAxis 
                    stroke="var(--text-color)"
                    tick={{ fill: 'var(--text-color)' }}
                  />
                  <Radar 
                    name="Skills"
                    dataKey="digs"
                    stroke="var(--primary-color)"
                    fill="var(--primary-color)"
                    fillOpacity={0.6}
                  />
                  <Radar 
                    name="Skills"
                    dataKey="serviceAces"
                    stroke="var(--primary-color)"
                    fill="var(--primary-color)"
                    fillOpacity={0.6}
                  />
                  <Radar 
                    name="Skills"
                    dataKey="assists"
                    stroke="var(--primary-color)"
                    fill="var(--primary-color)"
                    fillOpacity={0.6}
                  />
                  <Radar 
                    name="Skills"
                    dataKey="kills"
                    stroke="var(--primary-color)"
                    fill="var(--primary-color)"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </ComparisonCard>
        </ComparisonGrid>
      </YearComparisonSection>
    );
  };

  const renderCharts = () => {
    const currentData = getCurrentSeasonData();
    
    return (
      <ChartsGrid>
        <ChartContainer>
          <ChartTitle>Digs Progression</ChartTitle>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis 
                dataKey="gameNumber" 
                stroke="var(--text-color)"
                tick={{ fill: 'var(--text-color)' }}
              />
              <YAxis 
                stroke="var(--text-color)"
                tick={{ fill: 'var(--text-color)' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '10px',
                  color: 'var(--text-color)'
                }}
                labelStyle={{ color: 'var(--text-color)' }}
              />
              <Line 
                type="monotone" 
                dataKey="digs" 
                stroke="var(--primary-color)" 
                strokeWidth={2}
                dot={{ fill: 'var(--primary-color)', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>Service Aces by Game</ChartTitle>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis 
                dataKey="opponent" 
                stroke="var(--text-color)"
                tick={{ fill: 'var(--text-color)', angle: -45, textAnchor: 'end' }}
                height={80}
                interval={0}
              />
              <YAxis 
                stroke="var(--text-color)"
                tick={{ fill: 'var(--text-color)' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '10px',
                  color: 'var(--text-color)'
                }}
                labelStyle={{ color: 'var(--text-color)' }}
                formatter={(value: number) => [`${value} aces`, 'Service Aces']}
              />
              <Bar 
                dataKey="serviceAces" 
                fill="var(--primary-color)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartsGrid>
    );
  };

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

            {renderCharts()}

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
                    <TableCell>35 vs. Florence Falcons</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Service Aces</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>0.25/set</TableCell>
                    <TableCell>6 vs. East Helena Vigilantes</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Kills</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>0.03/set</TableCell>
                    <TableCell>3 vs. Polson Pirates</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Assists</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>0.37/set</TableCell>
                    <TableCell>6 vs. Polson Pirates</TableCell>
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
            {renderCharts()}
            <p style={{ textAlign: 'center', color: 'var(--text-color)', opacity: 0.7 }}>
              Additional statistics coming soon...
            </p>
          </SeasonStats>
        );
      case '2022-2023':
        return (
          <SeasonStats>
            <SeasonTitle>Freshman Year (2022-2023) Statistics</SeasonTitle>
            {renderCharts()}
            <p style={{ textAlign: 'center', color: 'var(--text-color)', opacity: 0.7 }}>
              Additional statistics coming soon...
            </p>
          </SeasonStats>
        );
      default:
        return null;
    }
  };

  return (
    <StatsContainer id="stats">
      {renderYearOverYearComparison()}
      <GlowingHR />
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