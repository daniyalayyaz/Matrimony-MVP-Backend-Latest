const express = require('express'); //import express

const router = express.Router();
const subAdminController = require('../controllers/subAdmin');
const AdminController = require("../controllers/adminRoute");

router.post('/subAdminCreate',subAdminController.subAdminCreate);
router.get('/showSubAdmin',subAdminController.subAdminShow);
router.put('/updatesubAdmin/:id',subAdminController.subAdminUpdate);
router.get('/subAdminById/:id',subAdminController.subAdminGetByID);
router.post('/subAdminByName/:id',subAdminController.subAdminGetByName);

router.delete('/deleteSubAdmin/:id',subAdminController.subAdminDelete);
module.exports = router;