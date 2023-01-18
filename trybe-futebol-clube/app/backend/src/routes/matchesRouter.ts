import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import auth from '../middlewares/authorization';

const router = Router();

const controller = new MatchesController();

router.patch('/:id', controller.updateMatchesController);
router.patch('/:id/finish', controller.finishMatchesController);
router.get('/', controller.getAllMatchesController);
router.post('/', auth.authTokenHeader, controller.insertMatchesController);

export default router;
