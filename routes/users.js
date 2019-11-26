//Defines user routes to post and get request.
const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.post('/registerUser', userController.create);
router.post('/authenticateUser', userController.authenticate);
router.post('/logoutUser', userController.logout);

router.get('/registerUser',userController.loadRegister)
router.get('/authenticateUser',userController.loadAuthenticate)
router.get('/userPage',userController.loadUserPage)
router.get('/streamingPage',userController.loadStreamingPage)
router.get('/accidentPredictionPage',userController.loadPredicctionAccidentPage)
router.get('/environmentPage',userController.loadEnvironmentPage)
router.get('/historyPage',userController.loadHistoryPage)
router.get('/lightsPage',userController.loadLightsPage)

module.exports = router;
