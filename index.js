import path from "path";
import express from "express";
import 'dotenv/config'
import { productsRouter } from "./controller/ProductsController.js";
import { errorHandling } from "./middleware/ErrorHandling.js";
import  {usersRouter} from "./controller/UsersController.js";


const app = express();
const port = +process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  next();
});

//middleware stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static"));

//endpoints
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.get("^/$|eshop", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).json({ status: res.sendStatus, msg: "resource not nound" });
});

app.use(errorHandling);

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
