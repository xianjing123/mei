var express = require('express');
var router = express.Router();
var cartModel = require('../model/cartModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  cartModel.find().then(result=>{
    res.send({list:result})
  })
});

router.delete('/',function(req,res){
  cartModel.remove({
    _id:req.body.comm._id
  }).then(result=>{
    if(result){
      res.send({ok:1})
    }else{
      res.send({ok:0})
    }
  })
})

router.post('/',function(req,res){
  cartModel.create({
    name:req.body.name,
    color:req.body.color,
    brand:req.body.brand,
    img:req.body.img,
    count:req.body.count,
    price:req.body.price
  }).then(result=>{
    res.send({ok:1})
  })
})

module.exports = router;
