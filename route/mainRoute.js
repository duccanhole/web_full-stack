const express = require('express');
//module controller
const Main = require('../controller/mainControll');
const router = express.Router();

router.post('/add', Main.post);
router.get('/edit/:id', Main.edit);
router.post('/update/:id', Main.update);

//export
module.exports = router;