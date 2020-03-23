const express = require('express');
const multer = require('multer');
const auth = require('../helpers/auth');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const upload = multer({storage})

const router = express.Router();
const productController = require('../controllers/product');

router
    //Read
    .get('/', auth.verify, productController.getProduct)
    //Pagination
    .get('/page', auth.verify, productController.pageProduct)
    //Sort by name
    .get('/sort/:susun', auth.verify, productController.sortProduct)
    //Read Detail
    .get('/:id_product', auth.verify, productController.productDetail)
    //Create
    .post('/', auth.verify, upload.single('image'), productController.insertProduct)
    //Update
    .patch('/:id_product', auth.verify, upload.single('image'), productController.updateProduct)
    //Delete
    .delete('/:id_product', auth.verify, productController.deleteProduct)
    //Search
    .get('/search/:keyword', auth.verify, productController.searchProduct)

module.exports = router;