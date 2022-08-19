import express from 'express'

const {createUser, loginUser, getAllUsers, getUsersPost, getUsersComments } = require('../controllers/user.controller')

const router = express.Router();

router.post('/', createUser);

router.post('/login', loginUser);

router.get('/', getAllUsers);

router.get('/me', getUsersPost);

router.get('/orders', getUsersComments);


module.exports = { usersRouter: router };
