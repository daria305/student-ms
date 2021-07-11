import express from "express";
import { login, signup } from "../controllers/useraccount.js";
import { getUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';
import { grantAccess, allowIfLoggedin } from '../middleware/accesscontrol.js'

const router = express.Router();

router
    .post('/signup', signup) 
    .post('/login', login)
 
    .get('/user/:userId', allowIfLoggedin, getUser)
    .get('/users', allowIfLoggedin, grantAccess('readAny', 'profile'), getUsers)
 
    .put('/user/:userId', allowIfLoggedin, grantAccess('updateAny', 'profile'), updateUser)
 
    .delete('/user/:userId', allowIfLoggedin, grantAccess('deleteAny', 'profile'), deleteUser);
    

export default router;