const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const auth = require('../helpers/auth')

router
    .get('/', auth.verify, categoryController.getCategory)
    .get('/:id_category', auth.verify, categoryController.categoryDetail)
    .post('/', auth.verify, categoryController.insertCategory)
    .patch('/:id_category', auth.verify, categoryController.updateCategory)
    .delete('/:id_category', auth.verify, categoryController.deleteCategory)

module.exports = router;