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
      connection.query("SELECT * FROM checkout", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
