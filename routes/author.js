var express = require('express');
var router = express.Router();
var authorController = require("../controllers/author");

/* GET users listing. */
router.get('/', authorController.getAll);

router.post('/add', authorController.insert);

module.exports = router;
