import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode, 
            msg: 'Failed to get users'
        })
    }
})