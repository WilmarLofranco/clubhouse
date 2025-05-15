const express = require('express');
const userRouter = express.Router();
const asyncHandler = require('express-async-handler');
const validator = require();
const userController = require('../controllers/userController');

//show login form
router.get('/', asyncHandler(controller.getLogin));
//authenticate user
router.post('/', asyncHandler(controller.postLogin));

// show sign-up form
router.get('/sign-up', asyncHandler(controller.getSignup));
// create a new user
router.post('/sign-up', asyncHandler(controller.postSignup));

module.exports = userRouter;