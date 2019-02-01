const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

//to create new user
router.post('/users', userController.createUser);

// to edit required user document fields
router.put('/users/:userId', userController.updateUser);

//to get information about any user
router.get('/users/:userId', userController.getUser);

//to remove specific user from mongodb and all articles that he created
router.delete('/users/:userId', userController.deleteUser);

//to get all articles that created by specific user
router.get('/users/:userId/articles', userController.getArticlesByUser);


module.exports = router;