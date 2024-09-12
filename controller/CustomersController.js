import { Router } from "express";
import customer from "../model/customer.js"; // Ensure this is correct

const customersRouter = new Router(); // Ensure the router is named correctly

customersRouter.get("/", (req, res) => {
  customer.fetchCustomers(req, res); // Use 'customer' if it's correctly imported
});

customersRouter.get("/:id", (req, res) => {
  customer.fetchCustomer(req, res); // Use 'customer'
});

customersRouter.post("/addCustomer", (req, res) => {
  customer.addCustomer(req, res); // Use 'customer'
});

customersRouter.patch("/update/:id", (req, res) => {
  customer.updateCustomer(req, res); // Use 'customer'
});

customersRouter.delete("/delete/:id", (req, res) => {
  customer.deleteCustomer(req, res); // Use 'customer'
});

export { customersRouter }; // Ensure this matches the import statement in index.js
