var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products");

/* GET users listing. */
router.get('/',productsController.getAll);

router.post('/add',productsController.add);

router.get('/:id', productsController.productDetails);

router.put('/:id/update',productsController.productUpdate);

router.delete('/:id/delete',productsController.productDelete);

module.exports = router;