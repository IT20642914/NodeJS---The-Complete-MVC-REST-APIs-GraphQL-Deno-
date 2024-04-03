const express = require('express')
const router = express.Router()
const path = require('path')

const rootDir=require('../utils/path')
//admin/addproduct=>GET
router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware3')
    res.sendFile(path.join(rootDir,'views','add-product.html'))

})
//admin/addproduct=>POST
router.post('/add-product',(req,res,next)=>{
    console.log('In the middleware4')
    console.log(req.body)
    res.redirect('/')
})

module.exports=router