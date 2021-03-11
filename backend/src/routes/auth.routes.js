import { Router } from 'express';
import * as authCtrl from "../controllers/auth.controller";
import * as validations from "../middlewares/index";

const router = Router();

router.post('/signup', validations.checkDuplicate, authCtrl.signup)
router.post('/signin', authCtrl.signin)
router.post('/post', validations.verifyToken, authCtrl.post)
router.get('/:username', authCtrl.profile)

export default router;