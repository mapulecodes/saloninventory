import path from "path";
import express from "express";
import cors from "cors";
import 'dotenv/config';
import { productsRouter } from "./controller/ProductsController.js";
import { usersRouter } from "./controller/UsersController.js";
import { customersRouter } from "./controller/CustomersController.js"; // Import the customers router
import { errorHandling } from "./middleware/ErrorHandling.js";

const app = express();
const port = process.env.PORT || 3001;

// CORS middleware
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "static"))); 

// Endpoints
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/customers", customersRouter); // Add this line to include customer routes

// Serve static HTML
app.get("^/$|/eshop", (req, res) => {
  res.status(200).sendFile(path.join(process.cwd(), "static", "html", "index.html"));
});

// 404 
app.use((req, res) => {
  res.status(404).json({ status: 404, msg: "Resource not found" });
});

// Error handling middleware
app.use(errorHandling);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
