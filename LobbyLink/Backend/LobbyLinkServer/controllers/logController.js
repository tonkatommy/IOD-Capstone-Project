"use strict";
let Models = require("../models");

const getLogs = (res) => {
    Models.Log.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createLog = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.Log(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateLog = (req, res) => {
    // updates the user matching the ID from the param using
    // JSON data POSTed in request body
    console.log(req.body);
    Models.Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteLog = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Log.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = { getLogs, createLog, updateLog, deleteLog };
