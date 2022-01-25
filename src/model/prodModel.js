const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:azerbaijan@cluster0.ewrjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useUnifiedTopology: true });
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    product: String,
    uID: Number
});

const productdata = mongoose.model('productdata', NewSchema);

module.exports = productdata;