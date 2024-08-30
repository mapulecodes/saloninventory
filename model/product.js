import { connection as db } from "../config/index.js";


class Products {
  
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT ID, ProductName, quantity, price FROM products;
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch products');
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }

    addProduct(req, res) {
        try {
            const strQry = `
            INSERT INTO products SET ?;
            `;
            db.query(strQry, [req.body.ProductName, req.body.quantity, req.body.price], (err) => {
                if (err) throw new Error('Unable to add a new product');
                res.json({
                    status: res.statusCode,
                    msg: 'Product was added'
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }
}

export { Products };

