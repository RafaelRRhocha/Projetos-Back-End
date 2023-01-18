import { Request, Response } from 'express';
import LeaderboardsService from '../services/leaderboard.service';

export default class LeaderboardsController {
  private leaderboardsService: LeaderboardsService;

  constructor() {
    this.leaderboardsService = new LeaderboardsService();
  }

  getAllLeaderboardsController = async (req: Request, res: Response) => {
    const board = await this.leaderboardsService.getLeaderboard();
    return res.status(200).json(this.leaderboardsService.sortLeaderboards(board as never));
  };

  getLeaderboardsHomeController = async (req: Request, res: Response) => {
    const board = await this.leaderboardsService.getLeaderboard('home');
    return res.status(200).json(this.leaderboardsService.sortLeaderboards(board as never));
  };

  getLeaderboardsAwayController = async (req: Request, res: Response) => {
    const board = await this.leaderboardsService.getLeaderboard('away');
    return res.status(200).json(this.leaderboardsService.sortLeaderboards(board as never));
  };
}
