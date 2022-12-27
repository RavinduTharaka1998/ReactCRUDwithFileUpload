const express = require('express');
const postRoutes = express.Router();

let Post = require('./post-model');

postRoutes.route('/addpost').post(function (req,res){
    let mypost = new Post(req.body);
    mypost.save()
        .then(mypost => {
            res.status(200).json({'post' : 'post is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

module.exports = postRoutes;