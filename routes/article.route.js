const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');

//to create new article
router.post('/articles', articleController.createArticle);

//to edit any article document
router.put('/articles/:articleId', articleController.updateArticle);

//to search for articles
router.get('/articles', articleController.getArticle);

//to delete any article from database
router.delete('/articles/:articleId', articleController.deleteArticle);

module.exports = router;