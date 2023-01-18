import { Request, Response } from 'express';
import teamModel from '../database/models/teams';

const messages = {
  notFound: { message: 'Team not found' },
};

export default class TeamsController {
  getAll = async (_req: Request, res: Response) => {
    const teams = await teamModel.findAll();
    return res.status(200).json(teams);
  };

  getForId = async (req: Request, res: Response) => {
    const getTeams = await teamModel.findOne({ where: { id: req.params.id } });

    if (!getTeams) { return res.status(400).json(messages.notFound); }
    return res.status(200).json(getTeams);
  };
}
