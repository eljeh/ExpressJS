var express = require('express');
var router = express.Router();

router.get('/', function(request, responce) {
    responce.render('index',{
        pageTitle: 'Home',
        pageID: 'home'
    });
});

module.exports = router;
