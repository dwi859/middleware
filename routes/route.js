const express = require('express');
const homeController = require('../controller/homeController')
const router = express.Router();
console.log("asdasdasd");
router.post('/proses', homeController.prosesPost)



module.exports = router;