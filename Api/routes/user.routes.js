import express from 'express';
import {deleteUser, test} from '../controllers/user.controllers.js'
import { updateUser } from '../controllers/user.controllers.js'
import { verifyToken } from '../util/verifyUser.js';
const router = express.Router();

router.get('/test',test);
router.put('/update/:userId', verifyToken ,updateUser);
router.delete('/delete/:userId', verifyToken ,deleteUser);
export default router;