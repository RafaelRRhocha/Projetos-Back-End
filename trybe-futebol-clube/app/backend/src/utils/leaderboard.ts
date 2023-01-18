interface ITeam {
  teamName: string;
}

interface IMatch {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome?: ITeam;
  teamAway?: ITeam;
}

const allLoses = (matches: IMatch[], id: number) => {
  const getLoses = matches.reduce((acc, curr) => {
    if (curr.awayTeam === id && curr.awayTeamGoals < curr.homeTeamGoals) return acc + 1;
    if (curr.homeTeam === id && curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return getLoses;
};

const allWins = (matches: IMatch[], id: number) => {
  const getVictories = matches.reduce((acc, curr) => {
    if (curr.awayTeam === id && curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;
    if (curr.homeTeam === id && curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return getVictories;
};

const allDraws = (matches: IMatch[], id: number) => {
  const getDraws = matches.reduce((acc, curr) => {
    if (curr.awayTeam === id && curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;
    if (curr.homeTeam === id && curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return getDraws;
};

const allPlayedGames = (matches: IMatch[], id: number) => {
  const getGames = matches.reduce((acc, curr) => {
    if (curr.awayTeam === id || curr.homeTeam === id) return acc + 1;
    return acc;
  }, 0);

  return getGames;
};

const verifyWinrate = (matches: IMatch[], id: number): string => {
  const points = allWins(matches, id) * 3 + allDraws(matches, id) * 1;
  const winrate = (points / (allPlayedGames(matches, id) * 3)) * 100;
  return winrate.toFixed(2);
};

const verifyGoals = (matches: IMatch[], id: number) => {
  const goals = matches.reduce((acc, curr) => {
    if (curr.homeTeam === id) return acc + curr.homeTeamGoals;
    if (curr.awayTeam === id) return acc + curr.awayTeamGoals;
    return acc;
  }, 0);

  const oppGoals = matches.reduce((acc, curr) => {
    if (curr.homeTeam === id) return acc + curr.awayTeamGoals;
    if (curr.awayTeam === id) return acc + curr.homeTeamGoals;
    return acc;
  }, 0);

  return { goals, oppGoals };
};

const verifyRate = (matches: IMatch[], id: number) => {
  const checkGoals = verifyGoals(matches, id).goals - verifyGoals(matches, id).oppGoals;
  return checkGoals;
};

const allPoints = (matches: IMatch[], id: number) => ({
  totalPoints: allWins(matches, id) * 3 + allDraws(matches, id) * 1,
  totalGames: allPlayedGames(matches, id),
  totalVictories: allWins(matches, id),
  totalDraws: allDraws(matches, id),
  totalLosses: allLoses(matches, id),
  goalsFavor: verifyGoals(matches, id).goals,
  goalsOwn: verifyGoals(matches, id).oppGoals,
  goalsBalance: verifyRate(matches, id),
  efficiency: verifyWinrate(matches, id),
});

export default allPoints;
