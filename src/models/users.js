require('dotenv').config();
const connection = require('../config/db');

module.exports = {
    getUser: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users`, (err, result) => {
                if(!err){resolve(result)}
                else{reject (new Error(err))}
            })
        })
    },
    getUserDetail: (username) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users`, (err, result) => {
                if(!err){resolve(result)}
                else{reject (new Error(err))}
            })
        })
    },
    insertUser: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO users SET ?", data, (err, result)=>{
                if(!err) {resolve(result);}
                else{reject(new Error(err));}
            });
        });
    },
}