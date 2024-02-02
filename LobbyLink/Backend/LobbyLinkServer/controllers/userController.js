"use strict";
let Models = require("../models"); // matches index.js

const getUsers = (res) => {
    // finds all users
    Models.User.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUser = (req, res) => {
    const userId = req.req.params._id;
    console.log("getUser: ", userId);
    // finds all users
    Models.User.findById(userId)
        .then((data) => req.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.User(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const insertUsers = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    Models.User.insertMany(data)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateUser = (req, res) => {
    // updates the user matching the ID from the param using
    // JSON data POSTed in request body
    console.log(req.body);
    Models.User.findByIdAndUpdate(req.props._id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteUser = (req, res) => {
    const userId = req.params._id;
    console.log("deleteUser: ", userId);
    // deletes the user matching the ID from the param
    Models.User.findByIdAndDelete(userId)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    insertUsers,
    updateUser,
    deleteUser,
};
