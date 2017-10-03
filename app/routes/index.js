var express = require('express');
var router = express.Router();

router.get('/', function(request, responce) {
    var data = request.app.get('appData');
    var speakerNameList = [];
    var speakerPhotoList = [];
    var speakerAboutList = [];
    var speakerIndexList = [];

    data.speakers.forEach(function(item) {
        speakerNameList = speakerNameList.concat(item.name);
        speakerPhotoList = speakerPhotoList.concat(item.picture);
        speakerAboutList = speakerAboutList.concat(item.about);
        speakerIndexList = speakerIndexList.concat(item.index);
    })

    responce.render('index',{
        pageTitle: 'Home',
        pageID: 'home',
        names: speakerNameList,
        photos: speakerPhotoList,
        about: speakerAboutList,
        index: speakerIndexList
    });
});

module.exports = router;
