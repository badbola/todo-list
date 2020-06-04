const express = require('express');

const homeController = require('../controllers/home_controller')

const router = express.Router();


router.get('/', homeController.home);
router.post('/create-task', homeController.create);
router.get('/delete-task/', homeController.deleteTask);
router.get('/delete-category', homeController.deleteCategory);
router.get('/delete-all/', homeController.deleteall);
console.log('router loaded');
module.exports = router;