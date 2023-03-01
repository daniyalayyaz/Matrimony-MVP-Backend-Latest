const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const ReligionAddController = require('../controllers/religion');

// 3.
router.post('/religion', ReligionAddController.addReligion);

router.get('/religion',ReligionAddController.getReligion)
router.get('/religion/:id',ReligionAddController.getReligionById)

router.put('/religion/:id',ReligionAddController.updateReligion)

router.delete('/religion/:id',ReligionAddController.deleteReligion)

// 4.
module.exports = router; // export to use in server.js