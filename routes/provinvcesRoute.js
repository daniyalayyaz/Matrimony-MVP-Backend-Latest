const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const ProvinvcesController = require('../controllers/provinvces.controller');

// 3.
router.post('/provinvces', ProvinvcesController.addProvinvces);

router.get('/provinvces',ProvinvcesController.getProvinvces)
router.get('/provinvces/:id',ProvinvcesController.getProvinvcesById)

router.put('/provinvces/:id',ProvinvcesController.updateProvinvces)

router.delete('/provinvces/:id',ProvinvcesController.deleteProvinvces)

// 4.
module.exports = router; // export to use in server.js