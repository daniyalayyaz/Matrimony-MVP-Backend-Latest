const express = require('express'); //import express
const multer = require('multer')

// 1.
const router = express.Router();
router.use(express.static(__dirname+"./uploads"));

// 2.
const PackageController = require('../controllers/packageController');

// 3.
const Storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage:Storage
}).single('user_file');
router.post('/package',upload, PackageController.addPackage);

router.get('/package',PackageController.getPackage)
router.get('/package/:id',PackageController.getPackageById)

router.put('/package/:id',PackageController.updatePackage)

router.delete('/package/:id',PackageController.deletePackage)

// 4.
module.exports = router; // export to use in server.js