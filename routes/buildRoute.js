const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const buildController = require('../controllers/build.controller');

// 3.
router.post('/build', buildController.addBuild);

router.get('/build',buildController.getBuild)
router.get('/build/:id',buildController.getBuildById)

router.put('/build/:id',buildController.updateBuild)

router.delete('/build/:id',buildController.deleteBuild)

// 4.
module.exports = router; // export to use in server.js