const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout');
const auth = require('../helpers/auth')

router
    .post('/', auth.verify, checkoutController.insertCheckout)
    .get('/', auth.verify, checkoutController.readCheckout);

module.exports = router;