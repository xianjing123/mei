var mongoose = require('mongoose')
var Schema = mongoose.Schema

var obj = {
    name:String,
    color:String,
    brand:String,
    img:String,
    count:Number,
    price:Number
}

var model = mongoose.model("user",new Schema(obj))

module.exports = model