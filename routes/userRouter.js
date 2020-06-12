const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usersController');
const colorsController = require('../controller/colorsController');

router.get('/', usercontroller.gethome);

router.post('/level1', usercontroller.postuser);

router.get('/colorsSelection', colorsController.getcolors);

router.post('/colorsSelected', colorsController.postcolors);

router.post('/level2', usercontroller.postlevel1);

router.get('/ScoreCard', usercontroller.getfinalPage);
module.exports = router;
