require("dotenv").config();
const connection = require("../config/db");

module.exports = {
  getProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT p.id, p.name, p.description, p.price, p.stock, p.image, c.name_category AS category, p.updated_at, p.created_at
                FROM product_name p
                INNER JOIN category c ON p.id_category = c.id`,
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
  pageProduct: pages => {
    return new Promise((resolve, reject) => {
      let offset = parseInt(pages);
      let startIndex = limit * (offset - 1);
      connection.query(
        "SELECT * FROM product_name  LIMIT 2 OFFSET ?",
        startIndex,
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
  productDetail: id_product => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT p.id, p.name, p.description, p.price, p.stock, p.image, c.name_category AS category, p.updated_at, p.created_at
            FROM product_name p
            INNER JOIN category c ON p.id_category = c.id WHERE p.id = ${id_product}`,
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
  insertProduct: data => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO product_name SET ?",
        data,
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
  updateProduct: (id_product, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE product_name SET ? WHERE id = ?",
        [data, id_product],
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
  deleteProduct: id_product => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM product_name WHERE id = ?",
        id_product,
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
  searchProduct: keyword => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product_name WHERE name LIKE ?",
        "%" + keyword + "%",
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
  sortProduct: (col, ord) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT p.id, p.name, p.description, p.price, p.stock, p.image, c.name_category AS category, p.updated_at, p.created_at
            FROM product_name p
            INNER JOIN category c ON p.id_category = c.id ORDER BY p.${col} ${ord}`,
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
