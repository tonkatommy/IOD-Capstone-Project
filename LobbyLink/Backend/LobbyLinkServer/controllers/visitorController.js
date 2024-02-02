"use strict";
let Models = require("../models");

const getVisitors = (res) => {
    Models.Visitor.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createVisitor = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.Visitor(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateVisitor = (req, res) => {
    // updates the user matching the ID from the param using
    // JSON data POSTed in request body
    console.log(req.body);
    Models.Visitor.findByIdAndUpdate(req.props.id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteVisitor = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Visitor.findByIdAndDelete(req.props.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = { getVisitors, createVisitor, updateVisitor, deleteVisitor };
