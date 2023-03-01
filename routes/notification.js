const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const NotificationController = require('../controllers/notification');

router.post('/nothicationAdd/:id',NotificationController.notificationCreate);
router.get('/nothicationShow/:id',NotificationController.notificationShow);
router.get('/nothicationShowById/:id',NotificationController.notificationShowById);
router.delete('/nothicationDeleteMany',NotificationController.notificationDeleteAll);
router.get('/nothicationUpdateMany/:id',NotificationController.notificationUpdate);
module.exports = router;