const checkoutModel = require('../models/checkout');
const miscHelper = require('../helpers/helpers')

module.exports = {
    insertCheckout: (req, res)=>{
        const id_order = req.body.id_order;

        checkoutModel.insertCheckout(id_order)
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