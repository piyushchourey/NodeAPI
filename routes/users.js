var express = require('express');
var router = express.Router();
var userRegister = require("../controllers/userRegister");

/* GET users listing. */
router.get('/', userRegister.tokenValidator,userRegister.createuser);
router.get('/getAll', userRegister.getAll);
router.post('/add', userRegister.login);

/** API path that will upload the files */
router.post('/upload', userRegister.xlsxupload);

module.exports = router;
