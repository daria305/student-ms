import express from "express";
import { login, signup } from "../controllers/useraccount.js";
import { getUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';
import { grantAccess, allowIfLoggedin } from '../middleware/accesscontrol.js'

const router = express.Router();

router
    .post('/signup', signup) 
    .post('/login', login)
 
    .get('/:userId', allowIfLoggedin, getUser)
    .get('', allowIfLoggedin, grantAccess('readAny', 'profile'), getUsers)
 
    .put('/:userId', allowIfLoggedin, grantAccess('updateAny', 'profile'), updateUser)
 
    .delete('/:userId', allowIfLoggedin, grantAccess('deleteAny', 'profile'), deleteUser);
    

export default router;