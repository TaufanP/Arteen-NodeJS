const express = require('express');
const router = express.Router();

const product = require('./product');
const category = require('./category')
const order = require('./order');
const checkout = require('./checkout')
const users = require('./users')

router.use('/product', product);
router.use('/category', category);
router.use('/order', order);
router.use('/checkout', checkout)
router.use('/users', users)

module.exports = router;