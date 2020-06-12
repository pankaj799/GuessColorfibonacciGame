const mongoose = require('mongoose');
const User = require('../model/usersSchema');
const Color = require('../model/colorSchema');

var fab = [1,1,2,3,5,8];
let score=0;
let i=0;

exports.gethome= (req, res, next)=>{
    res.render("home",{
        viewTitle: "Guess Color Game",
        color: Color
    });
};

exports.postuser= (req, res, next)=>{
    const FullName = req.body.FullName;
    User.findOne({FullName : FullName})
        .then(users =>{
            if(users)
            {
                return res.redirect('/');
            }
            const user =new User({
                FullName : FullName
            });
            return user.save()
                .then(result =>{
                    Color.find()
                        .then(col =>{
                            return res.render("gameStart", {
                                viewTitle: "First Level",
                                color : col,
                                names : FullName
                            });
                        })
                })
        })

        .catch(err => {console.log(err)});

};

exports.postlevel1= (req, res, next) =>{
    const color1 = req.body.color;
    const fullname = req.body.names;

    var finalcolor;

        Color.findOne({color: color1})
            .then(col => {
                console.log(col);
                User.findOne()
                    .sort({createdAt: -1})
                    .then(users => {
                        console.log(users);
                        console.log("fab" + fab[i]);
                        console.log("fabval" + i);
                        if (fab[i] === col.value) {
                            score = score + 10;
                            i = i + 1;
                        } else {
                            score = score - 10;
                            i = i + 1;
                        }
                        console.log(score);
                        users.Score = score;
                        console.log(users.Score);
                        return users.save()
                            .then(resu =>{
                                if(i < fab.length)
                                {
                                    Color.find()
                                        .then(col =>{
                                            return  res.render("gameStart",{
                                                viewTitle: "Next Level",
                                                color : col,
                                                names : fullname
                                            });
                                        })
                                        .catch(err => {console.log(err);});
                                }
                                else{
                                    i=0;
                                    score=0;
                                    res.redirect('/ScoreCard');
                                }
                            })


                    })
            })
            .catch(err => {
                console.log(err);
            });

            //
            // if(i === fab.length){
            //
            //
            // }
            // else
            // {
            //
            //
            // }
};

exports.getfinalPage= (req, res, next )=>{
    User.findOne()
        .sort({ createdAt: -1})
        .then(users =>{
            return res.render("FinalScore",{
                viewTitle: "Your Result",
                user: users
            });
        })
        .catch(err =>{console.log(err);})

};
