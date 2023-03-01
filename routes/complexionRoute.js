const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const complexionController = require('../controllers/complexion.controller');

// 3.
router.post('/complexion', complexionController.addComplexion);

router.get('/complexion',complexionController.getComplexion)
router.get('/complexion/:id',complexionController.getComplexionById)

router.put('/complexion/:id',complexionController.updateComplexion)

router.delete('/complexion/:id',complexionController.deleteComplexion)

// 4.
module.exports = router; // export to use in server.js