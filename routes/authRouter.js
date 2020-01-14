const Router = require('express').Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require('../config/sercrets.js');

//data model for users
const userModel = require('../database/models/userModel.js');


Router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bycrypt.hashSync(user.password, 10);
    user.password = hash;

    /* write function to add user to database */
     userModel.addUser(user)
         .then(users => {
             res.status(201).json({
                 users,
                 message: `Successfully created user: ${user.username} the ${user.role}`
             })
         })
         .catch(err => {
             res.status(400).json({
                 err,
                 message: err.errno === 19 ? 'User does not exists' : "Server error"
             });
         })


});

Router.post('/login', (req, res) => {
    let { username, password } = req.body;

    /* write function to add user to login*/

    userModel.addUser(user)
        .then(users => {
            res.status(201).json({
                users,
                message: `Successfully created user: ${user.username} the ${user.role}`
            })
        })
        .catch(err => {
            res.status(400).json({
                err,
                message: err.errno === 19 ? 'User exists' : "Server error"
            });
        })
})

module.exports = Router;