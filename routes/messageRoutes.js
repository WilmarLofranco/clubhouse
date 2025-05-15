const express = require('express');
const router = express.Router();
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

//show all messages
router.get('/messages', asyncHandler(controller.getAllMessages));
//show messages of a user
router.get('/messages/:userId', asyncHandler(controller.getUserMessages));

//delete a message
router.post('/delete/:msgId', asyncHandler(controller.deleteMessage));

//show add message form
router.get('/addMessage', asyncHandler(controller.addMessageGet));
//add a message
router.post('/addMessage', asyncHandler(controller.addMessagePost));

//show edit message form
router.get('/edit/:msgId', asyncHandler(controller.editMessageGet));
//edit a message
router.post('/edit/:msgId', asyncHandler(controller.editMessagePost));