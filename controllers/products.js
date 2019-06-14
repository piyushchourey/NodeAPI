var productModel = require('../model/product.model');

module.exports = {
    add : function(req,res,next) {
        let product = new productModel(
            {
                name: req.body.name,
                brand: req.body.brand,
                price: req.body.price,
                weight: req.body.weight,
                quantity:req.body.quantity
            }
        );
    
        product.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('Product Created successfully');
        });
    },
    getAll: function(req,res,next){
        productModel.find({},function(err,products){
            if(err) res.send(err);
            else res.send(products);
        });
    },
    productDetails: function(req,res,next){
        productModel.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    },
    productUpdate: function(req,res,next){ 
        productModel.findOneAndUpdate(req.body.params, { $set: req.body},{new: true},function(err,product){
            if (err) return next(err);
            res.send(product);
        })
    },
    productDelete: function(req,res,next){
        console.log(req.params.id);
        productModel.findOneAndDelete(req.params.id,function (err, product){
            if(err) return next(err);
            res.send(product)
        })
    }
}