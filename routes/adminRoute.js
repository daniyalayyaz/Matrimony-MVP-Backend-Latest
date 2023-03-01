const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const AdminController = require('../controllers/adminRoute');
const UserController = require("../controllers/userRoute");
// 3.
router.get('/getallusers', AdminController.AllUser);
router.get('/deleteuser/:id', AdminController.DeleteUser);
router.get('/blockuser/:id', AdminController.BlockUser)
router.get('/ViewOnlineUsers', AdminController.ViewOnlineUsers)
router.get('/viewAllRequest', AdminController.viewAllRequest)
router.post("/generateReport", AdminController.generateReport)
router.get("/getAllReports", AdminController.getAllReports);



router.post('/promotionAdd',AdminController.promotionAdd);
router.get('/promotionget',AdminController.promotionget);
router.delete('/deletePromotion/:id',AdminController.deletePromotion);
router.get('/getPromotionById/:id', AdminController.getPromotionById);
router.post('/promotionUpdate/:id',AdminController.updatePromotion);

router.get('/deleteAllReports', AdminController.deleteAllReports);
// 4.
module.exports = router; // export to use in server.js