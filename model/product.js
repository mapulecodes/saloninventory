import { db } from "../config/index.js";

class Products {
 
  async fetchProducts(req, res) {
    try {
      const strQry = `
        SELECT
          ID,
          ProductName,
          quantity,
          price
        FROM products;
      `;
      db.query(strQry, (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message, 
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: "No products found", 
          });
        }

        res.status(200).json({
          status: res.statusCode,
          results, 
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message, 
      });
    }
  }

 
  async fetchProduct(req, res) {
    try {
      const productId = req.params.id;
      const strQry = `
        SELECT
          ID,
          ProductName,
          quantity,
          price
        FROM products
        WHERE ID = ?;
      `;
      db.query(strQry, [productId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Product with ID ${productId} not found`, 
          });
        }

        res.status(200).json({
          status: res.statusCode,
          result: results[0], 
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  
  async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const { ProductName, quantity, price } = req.body;
      const strQry = `
        UPDATE products
        SET ProductName = ?, quantity = ?, price = ?
        WHERE ID = ?;
      `;
      db.query(strQry, [ProductName, quantity, price, productId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.affectedRows === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Product with ID ${productId} not found for update`,
          });
        }

        res.status(200).json({
          status: res.statusCode,
          message: "Product updated successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

 
  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      const strQry = `
        DELETE FROM products
        WHERE ID = ?;
      `;
      db.query(strQry, [productId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.affectedRows === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Product with ID ${productId} not found for deletion`,
          });
        }

        res.status(200).json({
          status: res.statusCode,
          message: "Product deleted successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }
}

const product = new Products();

export default product;
