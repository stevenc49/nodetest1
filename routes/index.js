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

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
	var db = req.db;

	var userName = req.body.username;
	var userEmail = req.body.useremail;

	console.log(userName);
	console.log(userEmail);

	var collection = db.get('usercollection');

    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
		console.log('error');
    });
});

module.exports = router;
