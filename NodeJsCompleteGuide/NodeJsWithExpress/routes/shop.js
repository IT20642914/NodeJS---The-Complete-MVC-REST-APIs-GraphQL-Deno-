const express = require('express')
const router = express.Router()
const path=require('path')
const rootDir=require('../utils/path')

router.get('/',(req,res,next)=>{
    console.log('In the middleware2')

    // res.send('<h1>Middle ware</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports=router
