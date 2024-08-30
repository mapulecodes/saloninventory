import { productsRouter } from "./controller/ProductsController.js"
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express ();
const port = process.env.PORT || 3001;

app.use((req,res, next)=>{
    res.header("Access-control-Allow-Origin","*");
    next()
})

//middleware stuff
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/products', productsRouter);

//endpoint
app.get('^/$|eshop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'));
});
//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});