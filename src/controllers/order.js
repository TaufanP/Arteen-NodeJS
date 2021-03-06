const orderModel = require("../models/order");
const miscHelper = require("../helpers/helpers");
const productModel = require("../models/product");
const jwt = require("jsonwebtoken");

module.exports = {
  getOrder: (req, res) => {
    orderModel.getOrder();
    orderModel
      .getOrder()
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  orderDetail: (req, res) => {
    const id_order = req.params.id_order;
    orderModel
      .orderDetail(id_order)
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  orderInvoice: (req, res) => {
    const invoice = req.params.invoice;
    orderModel
      .orderInvoice(invoice)
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  insertOrder: (req, res) => {
    const { id_product, quantity, total_price, invoice } = req.body;
    const data = {
      id_product,
      quantity,
      total_price,
      invoice
    };
    let stok = 0;
    if (quantity < 1) {
      res.json({ message: "Please order for 1 item or more!" });
    } else {
      productModel.productDetail(id_product).then(result => {
        stok = result[0].stock;
        if (stok > quantity && stok > 0) {
          orderModel
            .insertOrder(data)
            .then(result => {
              miscHelper.response(res, result, 201);
            })
            .catch(err => console.log(err));
        } else {
          const resultFail = { msg: "Stock is not available!" };
          res.json(resultFail);
        }
      });
    }
  },
  updateOrder: (req, res) => {
    const id_order = req.params.id_order;
    const { quantity, id_product } = req.body;
    const data = {
      quantity,
      id_product
    };

    orderModel
      .updateOrder(id_order, data)
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  deleteOrder: (req, res) => {
    const id_order = req.params.id_order;
    let status = "";
    orderModel.orderDetail(id_order).then(result => {
      status = result[0].status;
      if (status == "unpaid") {
        orderModel
          .deleteOrder(id_order)
          .then(result => {
            miscHelper.response(res, result, 201);
          })
          .catch(err => console.log(err));
      } else {
        const resultFail = { msg: "You cannot delete the paid order!" };
        res.json(resultFail);
      }
    });
  }
};
