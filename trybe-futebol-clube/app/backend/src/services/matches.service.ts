import Matches from '../database/models/matches';
import Teams from '../database/models/teams';

type IItem<T> = {
  [key: string]: T;
};

interface IGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export default class MatchesService {
  getAllMatches = async <T>(item?: IItem<T>) => {
    const matches = await Matches.findAll({
      include: [
        {
          model: Teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
      ...item,
    });
    return matches;
  };

  insertMatches = async (match: Matches) => {
    const verifyInsert = await Matches.create({ ...match, inProgress: true });
    return verifyInsert;
  };

  updateMatches = async (id: number, goals: IGoals) => {
    const { homeTeamGoals, awayTeamGoals } = goals;
    await Matches.update({ awayTeamGoals, homeTeamGoals }, { where: { id } });
    const uptd = await Matches.findOne({ where: { id } });
    return uptd;
  };

  finishMatches = async (id: number) => {
    await Matches.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  };
}
