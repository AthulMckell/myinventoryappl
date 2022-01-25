const express = require('express');

const chalk = require('chalk');
const path = require('path');
// const bodyparser = require('body-parser');
const cors = require('cors');
const productdata = require('./src/model/prodModel');

const app = new express();
const nav = [
    {
        link:'/warehouse', name: 'warehouse'
    },
    {
        link:'/stock',name: 'Add'
    },
    {
        link:'/delete',name: 'delete'
    }
    
]

const productRouter = require('./src/routes/prodRoute')(nav);
const addRouter = require('./src/routes/addRoute')(nav);

app.use(express.urlencoded({ extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use('/warehouse', productRouter);
app.use('/stock', addRouter);



app.get('/', (req,res)=>{
    productdata.find()
    .then(function(products){
    res.render('index', { 
        nav,
        title:'Inventory',
        products
    });
})
});


app.get('/delete', (req,res)=>{
        res.render('delete',{
            nav,
            title:'Inventory'
        })
});
app.delete('/delete', (req,res)=>{
    var item = {
        product: req.body.product,
            _id: req.body._id
    }
    var product = productdata(item)
    product.deleteOne(item); //remove to the db
    res.redirect('/')
    
        });


app.listen(3000, function () {
    console.log("Listening to port" + chalk.green(3000));
}); //creating a port