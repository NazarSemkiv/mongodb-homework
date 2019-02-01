const Article = require('../models/article');
const User = require('../models/user');

module.exports = {
    createArticle,
    deleteArticle,
    updateArticle,
    getArticle
};

//method to create new article
function createArticle(req, res, next) {
    Article.create(req.body).then(function (article) {
        res.send(article);
    }).catch(next);
    // User.updateOne({_id: req.body.owner}, {numberOfArticles: });  // ???? (+1)
}

//method to delete any article from database
function deleteArticle(req, res, next) {
    Article.deleteOne({_id: req.params.articleId}).then(function (article) {
        res.send(article);
    });
    // User.updateOne({_id: req.body.owner}, {numberOfArticles: });  // ???? (-1)
}

//method to edit any article document
function updateArticle(req, res, next) {
    Article.updateOne({_id: req.params.articleId}, req.body).then(function () {
        Article.findOne({_id: req.params.articleId}).then(function (article) {
            res.send(article);
        });
    });
}

//method to search for articles
function getArticle(req, res, next) {
    Article.find({
          title: req.body.title
          // subtitle: req.body.subtitle,
          // description: req.body.description,
          // owner: req.body.owner,                    //filter criteria ????
          // category: req.body.category,
          // createdAt: req.body.createdAt,
          // updatedAt: req.body.createdAt
        }).populate('owner').then(function (articles) {
        res.send(articles);
    });
}