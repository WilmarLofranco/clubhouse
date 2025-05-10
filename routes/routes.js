const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const validator = require();
const controller = require('../controllers/controller.js');

router.get('/', asyncHandler(controller.getLogin));
router.post('/', asyncHandler(controller.postLogin));

router.get('/sign-up', asyncHandler(controller.getSignup));
router.post('/sign-up', asyncHandler(controller.postSignup));

router.get('/messages', asyncHandler(controller.getAllMessages));
router.post('/delete/:msgId', asyncHandler(controller.deleteMessage));

router.get('/addMessage', asyncHandler(controller.addMessageGet));
router.post('/addMessage', asyncHandler(controller.addMessagePost));

router.get('/edit/:msgId', asyncHandler(controller.editMessageGet));
router.post('/edit/:msgId', asyncHandler(controller.editMessagePost));