import { Router } from "express";
import product from "../model/product.js";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
  try {
    product.fetchProducts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to get products",
    });
  }
});

productsRouter.get("/:id", (req, res) => {
  try {
    product.fetchProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to get a product",
    });
  }
});

productsRouter.post("/addProduct", (req, res) => {
  try {
    Products.addProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a new product.",
    });
  }
});

productsRouter.patch("/update/:id", (req, res) => {
  try {
    Products.updateProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a product.",
    });
  }
});

productsRouter.delete("/delete/:id", (req, res) => {
  try {
    Products.deleteProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a product.",
    });
  }
});

export { productsRouter };
