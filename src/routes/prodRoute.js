const { Router } = require('express');
const express = require('express');
const productdata = require('../model/prodModel');
const productRouter = express.Router();
function router(nav){                   //catching the nav into a funtion the funct should contain everything that uses the nav


productRouter.get('/', (req,res)=>{
    productdata.find()
    .then(function(products){
        res.render('warehouse',{
            nav,
            title:'Inventory',
            products
        });
    })
   
});
return productRouter;
}

module.exports = router;