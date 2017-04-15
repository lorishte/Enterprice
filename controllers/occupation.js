/**
 * Created by Marian on 13.4.2017 г..
 */

const Occupation = require('mongoose').model('Occupation');
const User = require('mongoose').model('User');

module.exports = {
    occupationCreateGet: (req, res) => {
        res.render('occupation/create')
    },

    occupationCreatePost: (req, res) => {
        let occupationParams = req.body;

        Occupation.create(occupationParams).then(occupation => {

            res.redirect('/occupation/list')
        })
    },

    occupationsGet: (req, res) => {

        Occupation.find({}).then(occupations => {

            res.render('occupation/list', {occupations: occupations})
        })

    },

    occupationEditPost: (req, res) => {

        let occupationParams = req.body;
        let id = occupationParams.occupationID;
        let newRate = occupationParams.occupationRate;

        Occupation.findOne({_id: id}).then(occupation => {
            occupation.occupationRate = newRate;
            occupation.save();

            User.find().then(users => {

                let wantedUsers = [];

                users.forEach(function (user) {
                    if(user.occupation == occupation.id) {
                        wantedUsers.push(user)
                    }
                });

                wantedUsers.forEach(function (user) {
                    user.rate = occupation.occupationRate;
                    user.save();
                })
            })
    })
}};