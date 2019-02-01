const User = require('../models/user');
const Article = require('../models/article');

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getArticlesByUser
};

//method to create new user
function createUser(req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
}

//method to delete user and all articles that he created
function deleteUser(req, res, next) {
    User.deleteOne({_id: req.params.userId}).then(function (user) {
        res.send(user);
    });
    // Article.deleteMany({owner: req.params.userId});
}

//method to edit required user document fields
function updateUser(req, res, next) {
    User.updateOne({_id: req.params.userId}, req.body).then(function () {
        User.findOne({_id: req.params.userId}).then(function (user) {
            res.send(user);
        });
    });
}

//method to get information about any user
function getUser(req, res, next) {
    User.findOne({_id: req.params.userId}).then(function (user) {
        res.send(user);
    });
    // Article.find({owner: req.params.userId}).then(function (articles) {
    //     res.send(articles);
    // });
}

//method to get all articles that created by specific user
function getArticlesByUser(req, res, next) {
    Article.find({owner: req.params.userId}).then(function (articles) {
            res.send(articles);
        });
}