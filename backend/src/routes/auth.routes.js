import { Router } from 'express';
import * as authCtrl from "../controllers/auth.controller";
import verifyUser from "../middlewares/verify.user";

const router = Router();

router.post('/signup', verifyUser, authCtrl.signup)
router.post('/signin', authCtrl.signin)

export default router;