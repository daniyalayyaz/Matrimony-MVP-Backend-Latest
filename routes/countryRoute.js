const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const countryController = require('../controllers/country.controller');

// 3.
router.post('/country', countryController.addCountry);

router.get('/country',countryController.getCountry)
router.get('/country/:id',countryController.getCountryById)

router.put('/country/:id',countryController.updateCountry)

router.delete('/country/:id',countryController.deleteCountry)

// 4.
module.exports = router; // export to use in server.js