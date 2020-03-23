const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout');
const auth = require('../helpers/auth')

router
    .post('/', auth.verify, checkoutController.insertCheckout)
    .get('/', auth.verify, checkoutController.readCheckout)
    .get('/:invoice', auth.verify, checkoutController.readCheckoutDetail);

module.exports = router;