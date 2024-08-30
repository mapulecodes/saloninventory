import express from 'express'
import { Products } from '../model/product.js'
import bodyParser from 'body-parser'

const productsRouter = express.Router()
productsRouter.use(bodyParser.json())

productsRouter.get('/', (req, res)=>{
    try{
        Products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to get products'
        })
    }
})

productsRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to get a product'
        })
    }
})

productsRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        Products.addProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new product.'
        })
    }
})

productsRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try{
        Products.updateProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update a product."
        })
    }
})

productsRouter.delete('/delete/:id', (req, res)=>{
    try{
        Products.deleteProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a product."
        })
    }
})

export{
    productsRouter
}