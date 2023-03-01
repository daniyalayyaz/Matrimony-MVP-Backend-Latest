const express = require('express'); //import express

// 1.
const router = express.Router();
const { upload } = require("../multers/uploadmulter");
// 2.
const UserController = require('../controllers/userRoute');
// 3.
router.get('/getProfile/:id', UserController.get);
router.post('/createProfile', UserController.createProfile);
router.post("/verify", UserController.confirmEmail)
router.post("/otpverify", UserController.otpVerification)
router.post("/userUpdate", UserController.update)
router.post("/Profilelogin", UserController.Profilelogin)
router.post("/blockUser", UserController.blockUser)
router.post("/changeLoginStatus", UserController.changeLoginStatus)
router.post("/showBlockedUsers", UserController.showBlockedUsers)
router.post("/unblockUser", UserController.unblockUser)
router.post("/payment", UserController.payment)
// router.post("/imageUpload/:id", upload.array('images',10),UserController.uploadAllImage);
router.put("/imageUpload/:id", upload.array("image"),UserController.uploadAllImage);
router.post("/changeAllSttaus",  UserController.changeAllSttaus);
router.post("/changeSingleImageStatus", UserController.changeSingleImageStatus);
router.post("/uploadProfileImage", UserController.changeSingleImageStatus);
router.post("/ProfileImage/:id", upload.single('image'),UserController.uploadProfileImage);
router.post("/upload", upload.single("image"),UserController.uploadProfileImage);
router.get("/showImages/:id",UserController.showAllImages);
router.post("/lockGallery", UserController.lockGallery);
router.delete("/deleteGallary/:id",UserController.deleteGallary);

router.post("/showPublicImages",UserController.showPublicImages);
router.post("/showOverallPublicImages",UserController.showOverallPublicImages);

// router.post("/whatsapp",UserController.whatsApp);

router.put('/assignPackageToUser/:id', UserController.assignPackageToUser);
router.post('/addToPackage', UserController.addToPackage);
router.get('/getPackage', UserController.getPackage);
router.delete('/deletePackage/:id',UserController.deletePackage);
router.get('/getPackageById/:id', UserController.getPackageById);
router.post('/packageUpdate/:id',UserController.updatePackage);


router.get('/getAllProfile', UserController.getallUsers);
router.put('/updateProfile/:id', UserController.userUpdate);
router.put('/updateProfileImage/:id',UserController.updateProfileImage);
router.post('/connectsDecrement/:id',UserController.connectsDecrement);
router.post("/deleteGalleryImage/:id", UserController.deleteGalleryImage);







// 4. 
module.exports = router; // export to use in server.js