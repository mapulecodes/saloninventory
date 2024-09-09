import { Router } from "express";
import product from "../model/product.js";

const productsRouter =  new Router();

productsRouter.get("/", (req, res) => {
  product.fetchProducts(req, res);
});

productsRouter.get("/:id", (req, res) => {
  product.fetchProduct(req, res); 
});


productsRouter.post("/addProduct", (req, res) => {
  product.addProduct(req, res);
});

productsRouter.patch("/update/:id", (req, res) => {
  product.updateProduct(req, res);
});


productsRouter.delete("/delete/:id", (req, res) => {
  product.deleteProduct(req, res);
});

export { productsRouter };
