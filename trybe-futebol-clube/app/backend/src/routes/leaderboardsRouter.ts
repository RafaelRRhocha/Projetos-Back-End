import { Router } from 'express';
import LeaderBoardController from '../controllers/leaderboards.controller';

const router = Router();

const controller = new LeaderBoardController();

router.get('/', controller.getAllLeaderboardsController);
router.get('/home', controller.getLeaderboardsHomeController);
router.get('/away', controller.getLeaderboardsAwayController);

export default router;
