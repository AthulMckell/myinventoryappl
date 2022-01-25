const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/warehouse',
{ useUnifiedTopology: true });
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    warehouse: String,
    uID: Number
});

const warehousedata = mongoose.model('warehousedata', NewSchema);

module.exports = warehousedata;