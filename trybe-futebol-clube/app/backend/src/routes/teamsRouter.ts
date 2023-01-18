import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const router = Router();

const controller = new TeamsController();

router.get('/', controller.getAll);
router.get('/:id', controller.getForId);

export default router;
