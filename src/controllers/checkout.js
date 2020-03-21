const checkoutModel = require('../models/checkout');
const miscHelper = require('../helpers/helpers')

module.exports = {
    insertCheckout: (req, res)=>{
        const {invoice, total} = req.body;
        const data = {
            invoice,
            total
        }
        checkoutModel.insertCheckout(invoice, data)
        .then((result)=>{
            miscHelper.response(res, result, 201);
        })
        .catch(err=>console.log(err));
    },
    readCheckout: (req, res)=>{
        checkoutModel.readCheckout()
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    }
}