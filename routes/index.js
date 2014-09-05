var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })

    console.log('helloworld url hit!');
});

router.get('/userlist', function(req, res) {
	var db = req.db;
	var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
})

/* GET New User Page */
router.get('/newuser', function(req, res) {
	res.render('newuser', {title: "Add New User"});
})

module.exports = router;
