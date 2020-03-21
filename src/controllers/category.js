const categoryModel = require('../models/category');
const miscHelper = require('../helpers/helpers');
//const jwt = require('jsonwebtoken');

module.exports = {
    getCategory: (req, res)=>{
        categoryModel.getCategory()
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    categoryDetail: (req, res)=>{
        const id_category = req.params.id_category;
        categoryModel.categoryDetail(id_category)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    insertCategory: (req, res)=>{
        const{
            id,
            name_category
        } = req.body;
        const data = {
            id,
            name_category
        }

        categoryModel.insertCategory(data)
        .then((result)=>{
            miscHelper.response(res, result, 201);
        })
        .catch(err=>console.log(err));
    },
    updateCategory: (req, res)=>{
        const id_category = req.params.id_category;
        const{
            id,
            name_category
        } = req.body;
        const data = {
            id,
            name_category
        }

        categoryModel.updateCategory(id_category, data)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    },
    deleteCategory: (req, res)=>{
        const id_category = req.params.id_category;

        categoryModel.deleteCategory(id_category)
        .then((result)=>{
            miscHelper.response(res, result, 200);
        })
        .catch(err=>console.log(err));
    }
}