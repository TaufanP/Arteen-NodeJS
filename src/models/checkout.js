require("dotenv").config();
const connection = require("../config/db");

module.exports = {
  insertCheckout: (invoice, data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO checkout SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  readCheckout: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM checkout ORDER BY last_payment DESC", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  readCheckoutDetail: (invoice) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM checkout WHERE invoice = ?", invoice, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
