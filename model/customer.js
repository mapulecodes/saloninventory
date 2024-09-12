import { db } from "../config/index.js";

class Customers {
  
  // Fetch all customers
  async fetchCustomers(req, res) {
    try {
      const strQry = `
        SELECT
          ID,
          CustomerName,
          CustomerMail,
          CustomerPhone
        FROM customers;
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
            message: "No customers found",
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

  // Fetch a single customer by ID
  async fetchCustomer(req, res) {
    try {
      const customerId = req.params.id;
      const strQry = `
        SELECT
          ID,
          CustomerName,
          CustomerMail,
          CustomerPhone
        FROM customers
        WHERE ID = ?;
      `;
      db.query(strQry, [customerId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Customer with ID ${customerId} not found`,
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

  // Create a new customer
  async createCustomer(req, res) {
    try {
      const { CustomerName, CustomerMail, CustomerPhone } = req.body;
      const strQry = `
        INSERT INTO customers (CustomerName, CustomerMail, CustomerPhone)
        VALUES (?, ?, ?);
      `;
      db.query(strQry, [CustomerName, CustomerMail, CustomerPhone], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        res.status(201).json({
          status: res.statusCode,
          message: "Customer created successfully",
          result: {
            ID: results.insertId,
            CustomerName,
            CustomerMail,
            CustomerPhone
          }
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  // Update a customer
  async updateCustomer(req, res) {
    try {
      const customerId = req.params.id;
      const { CustomerName, CustomerMail, CustomerPhone } = req.body;
      const strQry = `
        UPDATE customers
        SET CustomerName = ?, CustomerMail = ?, CustomerPhone = ?
        WHERE ID = ?;
      `;
      db.query(strQry, [CustomerName, CustomerMail, CustomerPhone, customerId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.affectedRows === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Customer with ID ${customerId} not found for update`,
          });
        }

        res.status(200).json({
          status: res.statusCode,
          message: "Customer updated successfully",
        });
      });
    } catch (e) {
      res.status(500).json({
        status: res.statusCode,
        msg: e.message,
      });
    }
  }

  // Delete a customer
  async deleteCustomer(req, res) {
    try {
      const customerId = req.params.id;
      const strQry = `
        DELETE FROM customers
        WHERE ID = ?;
      `;
      db.query(strQry, [customerId], (err, results) => {
        if (err) {
          return res.status(500).json({
            status: res.statusCode,
            message: err.message,
          });
        }

        if (results.affectedRows === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: `Customer with ID ${customerId} not found for deletion`,
          });
        }

        res.status(200).json({
          status: res.statusCode,
          message: "Customer deleted successfully",
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

const customer = new Customers();

export default customer;
