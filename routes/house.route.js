const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const houseController = require('../controllers/house.controller');

// 3.
router.post('/house', houseController.addHouse);

router.get('/house',houseController.getHouse)
router.get('/house/:id',houseController.getHouseById)

router.put('/house/:id',houseController.updateHouse)

router.delete('/house/:id',houseController.deleteHouse)

// 4.
module.exports = router; // export to use in server.js