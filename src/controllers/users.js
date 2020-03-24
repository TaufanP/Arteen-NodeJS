const userModel = require('../models/users');
const miscHelper = require('../helpers/helpers');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    getUser: (req, res) => {
        userModel.getUser()
        .then((result) => {
            miscHelper.response(res, result, 200)
        })
        .catch(err => {console.log(err)})
    },
    insertUser: (req, res) => {
        const saltRounds = 10;
        const {
            name,
            username,
            password
        } = req.body;
        const data = {
            name,
            username,
            password
        }
        
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err){throw err}
            else{
                bcrypt.hash(data.password, salt, (err, hash) => {
                    if(err){throw err}
                    else{
                        data.password = hash;
                        userModel.insertUser(data)
                        .then((result) => {
                            miscHelper.response(res, result, 201)
                        })
                        .catch(err => console.log(err));
                    }
                })
            }
        })
    },
    loginUser:(req, res)=>{
        const {
            username,
            password
        } = req.body;
        const data = {
            username,
            password
        }

        const useraja = {username: username}

        userModel.getUserDetail(data.username)
        .then((result) => {
            if(data.username === result[0].username){
                bcrypt.compare(data.password, result[0].password, (err, isMatch) => {
                    if(err){err=>console.log(err)}
                    else if(!isMatch){res.json({"message": "Incorrect password!"})}
                    else{
                        const token = jwt.sign({useraja}, process.env.PRIVATE_KEY, {expiresIn: '24h'});
                        res.json({
                            token: token
                        });
                    }
                })                
            }
            else{res.json({"message": "Incorrect username!"})}
        })
        .catch(err => res.json({"message": (err)}));
    }
}