import { Request, Response } from 'express';
import MatchesServices from '../services/matches.service';
import TeamService from '../services/team.service';

const messages = {
  notPossible: { message: 'It is not possible to create a match with two equal teams' },
};

export default class MatchesController {
  private matchesServices: MatchesServices;
  private teamServices: TeamService;

  constructor() {
    this.matchesServices = new MatchesServices();
    this.teamServices = new TeamService();
  }

  getAllMatchesController = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress) {
      const findAllMatches = (
        await this.matchesServices.getAllMatches({ where: { inProgress: inProgress === 'true' } })
      );
      return res.status(200).json(findAllMatches);
    }
    const matches = await this.matchesServices.getAllMatches();
    return res.status(200).json(matches);
  };

  insertMatchesController = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(422).json(messages.notPossible);
    }

    const filTeams = (
      await this.teamServices.getTeamsById(homeTeam, awayTeam)
    );
    console.log(filTeams);

    if ('statusCode' in filTeams) {
      return res.status(filTeams.statusCode).json(filTeams.message);
    }

    const finalMatches = await this.matchesServices.insertMatches(req.body);
    return res.status(201).json(finalMatches);
  };

  updateMatchesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const goals = req.body;
    const update = await this.matchesServices.updateMatches(Number(id), goals);
    return res.status(200).json(update);
  };

  finishMatchesController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const finishedMatche = await this.matchesServices.finishMatches(Number(id));
    return res.status(200).json(finishedMatche);
  };
}
