"use strict";
let Models = require("../models");

const getEmployees = (res) => {
    Models.Employee.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createEmployee = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.Employee(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateEmployee = (req, res) => {
    // updates the user matching the ID from the param using
    // JSON data POSTed in request body
    console.log(req.body);
    Models.Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteEmployee = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Employee.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};
