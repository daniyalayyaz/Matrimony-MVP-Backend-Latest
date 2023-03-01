const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const sectController = require('../controllers/sect.controller');

// 3.
router.post('/sect', sectController.addSect);

router.get('/sect',sectController.getSect)
router.get('/sect/:id',sectController.getSectById)

router.put('/sect/:id',sectController.updateSect)

router.delete('/sect/:id',sectController.deleteSect)

// 4.
module.exports = router; // export to use in server.js