require('dotenv').config();
const connection = require('../config/db');

module.exports = {
    insertCheckout: (id_order)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO checkout SET id_order = ?", id_order,(err, result)=>{
                if(!err) {resolve(result);}
                else{reject(new Error(err));}
            });
            connection.query(
                `UPDATE product_name
                INNER JOIN orderdata ON product_name.id = orderdata.id_product
                INNER JOIN checkout ON orderdata.id = checkout.id_order
                SET product_name.stock = IF(orderdata.status = "unpaid", product_name.stock-orderdata.quantity, product_name.stock)
                WHERE checkout.id_order = ${id_order}`
                , (err, result) =>{
                    if(!err){resolve, result}
                    else{reject(new Error(err))}
            });
            connection.query(
                `UPDATE orderdata
                SET orderdata.status = IF(orderdata.status = "unpaid", "paid", orderdata.status)
                WHERE orderdata.id = ${id_order}`
                , (err, result) =>{
                    if(!err){resolve, result}
                    else{reject(new Error(err))}
            });
        });
    },
    readCheckout: ()=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM checkout",(err, result)=>{
                if(!err) {resolve(result);}
                else{reject(new Error(err));}
            });
        })
    }
}