const express = require('express');
const auth = require('../helpers/auth');
const router = express.Router();
const orderController = require('../controllers/order');

router
    //Read
    .get('/', /*auth.verify,*/ orderController.getOrder)
    //Read Detail
    .get('/:id_order', /*auth.verify,*/orderController.orderDetail)
    //Create
    .post('/', /*auth.verify,*/ orderController.insertOrder)
    //Update
    .patch('/:id_order', /*auth.verify,*/ orderController.updateOrder)
    //Delete
    .delete('/:id_order', /*auth.verify,*/ orderController.deleteOrder)

module.exports = router;