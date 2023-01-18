import Match from '../database/models/matches';
import Team from '../database/models/teams';
import allPoints from '../utils/leaderboard';

interface ITeams {
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
  name: string;
}

export default class LeaderboardsService {
  getAllBoards = async () => {
    const teams = await Team.findAll();

    const allMatches = await Match.findAll({ where: { inProgress: false } });

    const getAll = teams.map((e: Team) => ({
      name: e.teamName,
      ...allPoints(allMatches as never, e.id),
    }));

    const getHome = teams.map((e: Team) => {
      const home = allMatches.filter((element: Match) => element.homeTeam === e.id);
      return { name: e.teamName, ...allPoints(home as never, e.id) };
    });

    const getAway = teams.map((e: Team) => {
      const away = allMatches.filter((element: Match) => element.awayTeam === e.id);
      return { name: e.teamName, ...allPoints(away as never, e.id) };
    });

    return { getAway, getAll, getHome };
  };

  getLeaderboard = async (key?: string) => {
    let lBoard;

    if (!key) lBoard = (await this.getAllBoards()).getAll;
    if (key === 'home') lBoard = (await this.getAllBoards()).getHome;
    if (key === 'away') lBoard = (await this.getAllBoards()).getAway;

    return lBoard;
  };

  sortLeaderboards = (items: ITeams[]) => items.sort((prev, curr) => {
    let sort = curr.totalPoints - prev.totalPoints;
    if (!sort) {
      sort = curr.totalVictories - prev.totalVictories;
    }
    if (!sort) {
      sort = curr.goalsBalance - prev.goalsBalance;
    }
    if (!sort) {
      sort = curr.goalsFavor - prev.goalsFavor;
    }
    if (!sort) {
      sort = curr.goalsOwn - prev.goalsOwn;
    }
    return sort;
  });
}
