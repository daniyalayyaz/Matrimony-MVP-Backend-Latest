const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const MotherLanguageController = require('../controllers/motherLanguage.controller');

// 3.
router.post('/motherLanguage', MotherLanguageController.addMotherLanguage);

router.get('/motherLanguage',MotherLanguageController.getMotherLanguage)
router.get('/motherLanguage/:id',MotherLanguageController.getMotherLanguageById)

router.put('/motherLanguage/:id',MotherLanguageController.updateMotherLanguage)

router.delete('/motherLanguage/:id',MotherLanguageController.deleteMotherLanguage)

// 4.
module.exports = router; // export to use in server.js