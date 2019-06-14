var xlsxtojson = require("xlsx-to-json-lc");
var userModel = require('../model/register');
var upload = require('../config/multerupload');

var insert = function(insertData,callback){
    // save multiple documents to the collection referenced by login Model
    console.log(insertData);
}


 
    

// create new cause
module.exports = {
    tokenValidator: function(req,res,next){
        if(req.headers.hasOwnProperty('host'))
            next();
    },
    createuser : function(req,res,next) { res.render('home');
    //    var login = [{ username: 'piyush', password: 12345, status: 0 }];
 
    //     // save multiple documents to the collection referenced by Book Model
    //     userModel.create(login, function (err, docs) {
    //     if (err){ 
    //         return req.json(err);
    //     } else {
    //         req.json("Multiple documents inserted to Collection");
    //     }
    //     });
    },
    getAll: function(req,res,next){
        userModel.find({},function(err,users){
            if(err) res.send(err);
            else res.send(users);
        });
    },
    login : function(req,res,next){
        userModel.find({ 'username': req.body.username, 'password': req.body.password },function (err, docs) {
           if(err) res.send('dsfdf');
           else res.send('{"type":"success","msg":"Login Successfully!!","id":"1","token":"5d039189056eb","role":"network"}');
        });
    },
    
    xlsxupload: function(req,res,next){
        var exceltojson;
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            console.log(req.file.path);
            try {
                exceltojson({
                    input: req.file.path,
                    output: null, //since we don't need output.json
                    lowerCaseHeaders:true
                }, function(err,result){
                    if(err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    } 
                    else if(result.length){
                        insert(result,function(error,success){
                            if(success) module.exports.getAll(req,res,next);
                        }); 
                    }
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        })
    }
}
