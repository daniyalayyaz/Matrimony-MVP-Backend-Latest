const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const looksController = require('../controllers/looks.controller');

// 3.
router.post('/looks', looksController.addLooks);

router.get('/looks',looksController.getLooks)
router.get('/looks/:id',looksController.getLooksById)

router.put('/looks/:id',looksController.updateLooks)

router.delete('/looks/:id',looksController.deleteLooks)

// 4.
module.exports = router; // export to use in server.js