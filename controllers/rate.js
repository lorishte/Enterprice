/**
 * Created by Marian on 7.4.2017 г..
 */

const formatDate = require('./../utilities/formatDate');
const mongoose = require('mongoose');

const User = require('mongoose').model('User');
const Occupation = require('mongoose').model('Occupation');
const Role = require('mongoose').model('Role');

module.exports = {

    ratesGet: (req, res) => {

        let user = req.user;
        let isAdmin = true;

        Role.findOne({name: 'Admin'}).then(role => {

            if(user.roles.indexOf(role._id) == -1) {
                isAdmin = false;
            }
            if (isAdmin) {
                User.find({}).populate('occupation').then(users => {

                    /*TO DO: Error message*/

                    res.render('rate/list', {users: users, isAdmin: isAdmin});
                })
            } else {
                res.render('home/index', {error: 'Access denied!'})
            }
        })
    },

    rateEdit: (req, res) => {
        let rateParams = req.body;

        User.findOne({_id: rateParams.id}).then(user => {

            user.rate = rateParams.rate;
            user.save();
        })
    }
};
