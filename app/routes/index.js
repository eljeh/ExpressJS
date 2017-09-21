var express = require('express');
var router = express.Router();

router.get('/', function(request, responce) {
    var data = request.app.get('appData');
    var speakerNameList = [];
    var speakerPhotoList = [];

    data.speakers.forEach(function(item) {
        speakerNameList = speakerNameList.concat(item.name);
        speakerPhotoList = speakerPhotoList.concat(item.picture);
    })

    responce.render('index',{
        pageTitle: 'Home',
        pageID: 'home',
        names: speakerNameList,
        photos: speakerPhotoList
    });
});

module.exports = router;
