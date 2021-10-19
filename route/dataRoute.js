const express = require('express');
//module controller
const Data = require('../controller/dataControll');
const router = express.Router();

router.get('/delete/:id', Data.delete);
router.delete('/deleteall', Data.deleteAll);
router.get('/', Data.index);

//export
module.exports = router;