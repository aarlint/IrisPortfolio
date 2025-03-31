export interface GameStats {
  gameNumber: number;
  opponent: string;
  date: string;
  result: string;
  digs: number;
  serviceAces: number;
  assists: number;
  kills: number;
}

export interface SeasonStats {
  year: string;
  games: GameStats[];
}

export const statsData: SeasonStats[] = [
  {
    year: '2024-2025',
    games: [
      {
        gameNumber: 1,
        opponent: 'Corvallis Blue Devils',
        date: '2024-08-29',
        result: 'W 3-1',
        digs: 28,
        serviceAces: 4,
        assists: 5,
        kills: 2
      },
      {
        gameNumber: 2,
        opponent: 'Hamilton Broncs',
        date: '2024-09-05',
        result: 'W 3-0',
        digs: 25,
        serviceAces: 3,
        assists: 4,
        kills: 1
      },
      {
        gameNumber: 3,
        opponent: 'Stevensville Yellowjackets',
        date: '2024-09-12',
        result: 'W 3-0',
        digs: 22,
        serviceAces: 5,
        assists: 3,
        kills: 2
      },
      {
        gameNumber: 4,
        opponent: 'Butte Central Catholic Maroons',
        date: '2024-09-19',
        result: 'W 3-0',
        digs: 20,
        serviceAces: 4,
        assists: 4,
        kills: 1
      },
      {
        gameNumber: 5,
        opponent: 'East Helena Vigilantes',
        date: '2024-09-26',
        result: 'W 3-0',
        digs: 18,
        serviceAces: 6,
        assists: 3,
        kills: 2
      },
      {
        gameNumber: 6,
        opponent: 'Polson Pirates',
        date: '2024-10-03',
        result: 'W 3-2',
        digs: 32,
        serviceAces: 3,
        assists: 6,
        kills: 3
      },
      {
        gameNumber: 7,
        opponent: 'Whitefish Bulldogs',
        date: '2024-10-10',
        result: 'W 3-2',
        digs: 30,
        serviceAces: 4,
        assists: 5,
        kills: 2
      },
      {
        gameNumber: 8,
        opponent: 'Florence Falcons',
        date: '2024-10-17',
        result: 'L 2-3',
        digs: 35,
        serviceAces: 2,
        assists: 4,
        kills: 1
      },
      {
        gameNumber: 9,
        opponent: 'Kalispell Glacier Wolfpack',
        date: '2024-10-24',
        result: 'L 0-3',
        digs: 28,
        serviceAces: 1,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 10,
        opponent: 'Billings Central Catholic Rams',
        date: '2024-10-31',
        result: 'L 1-3',
        digs: 32,
        serviceAces: 2,
        assists: 5,
        kills: 2
      }
    ]
  },
  {
    year: '2023-2024',
    games: [
      {
        gameNumber: 1,
        opponent: 'Corvallis Blue Devils',
        date: '2023-08-30',
        result: 'W 3-0',
        digs: 25,
        serviceAces: 3,
        assists: 4,
        kills: 2
      },
      {
        gameNumber: 2,
        opponent: 'Hamilton Broncs',
        date: '2023-09-06',
        result: 'W 3-1',
        digs: 28,
        serviceAces: 4,
        assists: 5,
        kills: 2
      },
      {
        gameNumber: 3,
        opponent: 'Stevensville Yellowjackets',
        date: '2023-09-13',
        result: 'W 3-0',
        digs: 22,
        serviceAces: 5,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 4,
        opponent: 'Butte Central Catholic Maroons',
        date: '2023-09-20',
        result: 'W 3-0',
        digs: 20,
        serviceAces: 4,
        assists: 4,
        kills: 1
      },
      {
        gameNumber: 5,
        opponent: 'East Helena Vigilantes',
        date: '2023-09-27',
        result: 'W 3-0',
        digs: 18,
        serviceAces: 6,
        assists: 3,
        kills: 2
      },
      {
        gameNumber: 6,
        opponent: 'Polson Pirates',
        date: '2023-10-04',
        result: 'W 3-2',
        digs: 30,
        serviceAces: 3,
        assists: 5,
        kills: 2
      },
      {
        gameNumber: 7,
        opponent: 'Dawson County Red Devils',
        date: '2023-10-11',
        result: 'W 3-1',
        digs: 28,
        serviceAces: 4,
        assists: 4,
        kills: 2
      },
      {
        gameNumber: 8,
        opponent: 'Billings Central Catholic Rams',
        date: '2023-10-18',
        result: 'L 0-3',
        digs: 25,
        serviceAces: 2,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 9,
        opponent: 'Whitefish Bulldogs',
        date: '2023-10-25',
        result: 'W 3-2',
        digs: 32,
        serviceAces: 4,
        assists: 5,
        kills: 2
      },
      {
        gameNumber: 10,
        opponent: 'Columbia Falls Wildcats',
        date: '2023-11-01',
        result: 'W 3-1',
        digs: 28,
        serviceAces: 3,
        assists: 4,
        kills: 2
      }
    ]
  },
  {
    year: '2022-2023',
    games: [
      {
        gameNumber: 1,
        opponent: 'Corvallis Blue Devils',
        date: '2022-08-31',
        result: 'L 0-3',
        digs: 20,
        serviceAces: 2,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 2,
        opponent: 'Hamilton Broncs',
        date: '2022-09-07',
        result: 'L 1-3',
        digs: 22,
        serviceAces: 3,
        assists: 4,
        kills: 1
      },
      {
        gameNumber: 3,
        opponent: 'Stevensville Yellowjackets',
        date: '2022-09-14',
        result: 'W 3-1',
        digs: 25,
        serviceAces: 4,
        assists: 4,
        kills: 2
      },
      {
        gameNumber: 4,
        opponent: 'Butte Central Catholic Maroons',
        date: '2022-09-21',
        result: 'W 3-0',
        digs: 18,
        serviceAces: 5,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 5,
        opponent: 'East Helena Vigilantes',
        date: '2022-09-28',
        result: 'W 3-0',
        digs: 15,
        serviceAces: 6,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 6,
        opponent: 'Polson Pirates',
        date: '2022-10-05',
        result: 'L 2-3',
        digs: 28,
        serviceAces: 3,
        assists: 4,
        kills: 2
      },
      {
        gameNumber: 7,
        opponent: 'Whitefish Bulldogs',
        date: '2022-10-12',
        result: 'L 1-3',
        digs: 25,
        serviceAces: 2,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 8,
        opponent: 'Columbia Falls Wildcats',
        date: '2022-10-19',
        result: 'L 0-3',
        digs: 20,
        serviceAces: 2,
        assists: 3,
        kills: 1
      },
      {
        gameNumber: 9,
        opponent: 'Dawson County Red Devils',
        date: '2022-10-26',
        result: 'W 3-1',
        digs: 25,
        serviceAces: 4,
        assists: 4,
        kills: 2
      },
      {
        gameNumber: 10,
        opponent: 'Billings Central Catholic Rams',
        date: '2022-11-02',
        result: 'L 0-3',
        digs: 22,
        serviceAces: 2,
        assists: 3,
        kills: 1
      }
    ]
  }
]; 