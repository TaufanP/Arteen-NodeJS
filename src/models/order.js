require("dotenv").config();
const connection = require("../config/db");

module.exports = {
  getOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT o.id, p.name, o.quantity, p.price*o.quantity AS totalPrice, o.status
                FROM orderdata o
                INNER JOIN product_name p ON o.id_product = p.id
                WHERE o.status = 'unpaid'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  orderDetail: id_order => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT orderdata.id, orderdata.quantity, product_name.stock, orderdata.status FROM orderdata INNER JOIN product_name ON orderdata.id_product = product_name.id WHERE orderdata.id = ?",
        id_order,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  orderInvoice: invoice => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT o.*, p.name
        FROM orderdata o 
        INNER JOIN product_name p
        ON o.id_product = p.id
        WHERE invoice = ${invoice}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  insertOrder: data => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO orderdata SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      connection.query(
        `UPDATE product_name p
                  INNER JOIN orderdata o
                  ON ${data.id_product} = p.id
                  SET p.stock = (p.stock - ${data.quantity})
                  WHERE o.invoice = ${data.invoice}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  updateOrder: (id_order, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE orderdata SET ? WHERE id = ?",
        [data, id_order],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  deleteOrder: id_order => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM orderdata WHERE id IN(
                    SELECT id
                    FROM orderdata
                    WHERE status = "unpaid"
                    AND id = ${id_order}
                )`,
        id_order,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
