const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example',
{ useUnifiedTopology: true });
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    product: String,
    uID: Number
});

const productdata = mongoose.model('productdata', NewSchema);

module.exports = productdata;