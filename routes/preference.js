const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const preferenceController = require('../controllers/preference');

router.post('/preferenceAdd',preferenceController.preferenceCreate);
router.get('/preferenceShowById/:id',preferenceController.preferenceShowById);

module.exports = router;