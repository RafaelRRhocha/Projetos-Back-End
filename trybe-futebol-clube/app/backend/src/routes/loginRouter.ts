import { Router } from 'express';
import UserController from '../controllers/user.controller';
import auth from '../middlewares/authorization';

const router = Router();

const controller = new UserController();

router.post('/', auth.authToken);
router.get('/validate', controller.getRole);

export default router;
