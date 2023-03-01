const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const castController = require('../controllers/cast.controller');

// 3.
router.post('/cast', castController.addCast);

router.get('/cast',castController.getCast)
router.get('/cast/:id',castController.getCastById)

router.put('/cast/:id',castController.updateCast)

router.delete('/cast/:id',castController.deleteCast)

// 4.
module.exports = router; // export to use in server.js