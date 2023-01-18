import Team from '../database/models/teams';

interface ITeam {
  id: number;
  teamName: string;
}

const invalid = {
  statusCode: 404,
  message: 'There is no team with such id!',
};

export default class TeamService {
  model = Team;

  getAllTeams = async (): Promise<ITeam[]> => {
    const allTeams = await this.model.findAll();
    return allTeams;
  };

  getTeamsById = async (n1: number, n2: number) => {
    const { statusCode, message } = invalid;

    const arr = [n1, n2];

    const getById = await Promise.all(arr.map((id) => (
      Team.findOne({ where: { id } })
    )));

    const invalidTeam = getById.some((team) => !team);

    if (invalidTeam) return { statusCode, message };

    return getById;
  };
}
