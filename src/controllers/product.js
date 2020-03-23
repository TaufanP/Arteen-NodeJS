const productModel = require('../models/product');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getProduct: (req, res)=>{
        productModel.getProduct()
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        
        .catch(err=>console.log(err));
    },
    pageProduct: (req, res)=>{
        const pages = req.query.pages;
        productModel.pageProduct(pages)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    productDetail: (req, res)=>{
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    insertProduct: (req, res)=>{
        const{
            name,
            description,
            price,
            stock,
            id_category
        } = req.body;
        const data = {
            name,
            description,
            price,
            stock,
            image: `http://54.159.200.168:8081/uploads/${req.file.filename}`,
            id_category
        }

        productModel.insertProduct(data)
        .then((result)=>{
            const dataResponse = ({id:result.insertId, ...data})
            miscHelper.response(res, dataResponse, 201);
        })
        .catch(err=>console.log(err));
    },
    updateProduct: (req, res)=>{
        const id_product = req.params.id_product;
        const{
            name,
            description,
            price,
            stock,
            id_category
        } = req.body;
        const data = {
            name,
            description,
            price,
            stock,
            image: `http://54.159.200.168:8081/uploads/${req.file.filename}`,
            id_category
        }

        productModel.updateProduct(id_product, data)
        .then((result)=>{
            const dataResponse = ({...data})
            miscHelper.response(res, dataResponse, 200);
        })
        .catch(err=>console.log(err));
    },
    deleteProduct: (req, res)=>{
        const id_product = req.params.id_product;

        productModel.deleteProduct(id_product)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    searchProduct: (req, res)=>{
        const keyword = req.params.keyword;
        productModel.searchProduct(keyword)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    sortProduct: (req, res)=>{
        const susun2 = req.params.susun;
        productModel.sortProduct(susun2)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    }
}