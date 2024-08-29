import { connection as db } from "../config/index.js";

class ProductService {
    static getAllProducts(req, res) {
        const sql = `
        SELECT ID, ProductName, quantity, price
        FROM products;
        `;
        db.query(sql, (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ status: "success", data: results });
        });
    }

    static getProductById(req, res) {
        const sql = `
        SELECT ID, ProductName, quantity, price
        FROM products
        WHERE ID = ?;
        `;
        db.query(sql, [req.params.id], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ status: "success", data: result[0] });
        });
    }

    static createProduct(req, res) {
        const sql = `
        INSERT INTO products (ProductName, quantity, price)
        VALUES (?, ?, ?);
        `;
        const { ProductName, quantity, price } = req.body;
        db.query(sql, [ProductName, quantity, price], (error) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ status: "success", message: "Product added successfully" });
        });
    }

    static updateProduct(req, res) {
        const sql = `
        UPDATE products
        SET ProductName = ?, quantity = ?, price = ?
        WHERE ID = ?;
        `;
        const { ProductName, quantity, price } = req.body;
        db.query(sql, [ProductName, quantity, price, req.params.id], (error) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ status: "success", message: "Product updated successfully" });
        });
    }

    static deleteProduct(req, res) {
        const sql = `
        DELETE FROM products
        WHERE ID = ?;
        `;
        db.query(sql, [req.params.id], (error) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(200).json({ status: "success", message: "Product deleted successfully" });
        });
    }
}

export { ProductService };
