const express = require('express');
const AdminRoutes=require('./routes/admin')
const ShopRoutes=require('./routes/shop')
const path=require('path')
const app=express();
const bodyParser=require('body-parser');
const rootDir=require('./utils/path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,'public')))
app.use('/admin',AdminRoutes)
app.use(ShopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
app.listen(3000);
