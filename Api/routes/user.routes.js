import express from 'express';
import {deleteUser, test, updateUser,  signout} from '../controllers/user.controllers.js'
import { verifyToken } from '../util/verifyUser.js';
const router = express.Router();

router.get('/test',test);
router.put('/update/:userId', verifyToken ,updateUser);
router.delete('/delete/:userId', verifyToken ,deleteUser);
router.post('/signout' , signout );
export default router;