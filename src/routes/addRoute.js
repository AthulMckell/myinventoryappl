//this page cointains the add product
const express = require('express');
const addRouter = express.Router();
const productdata = require('../model/prodModel');
function router(nav){
    addRouter.get('/', (req,res)=>
    {
        res.render('addProduct',{
            nav,
            title:'Inventory'
        })
    });
    addRouter.post('/add', (req,res)=>{
var item = {
    product: req.body.product,
        //uID: req.body.uID
}
var product = productdata(item)
product.save(); //saving to the db
res.redirect('/')

    });
    return addRouter;
}
module.exports = router;
