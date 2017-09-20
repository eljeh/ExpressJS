var express = require('express');
var router = express.Router();

router.get('/', function(request, responce) {
    var data = request.app.get('appData');
    var speakerPhotoList = [];
    var speakerNameList = []

    data.speakers.forEach(function(item) {
        speakerPhoto = speakerPhotoList.concat(item.picture);
        speakerName = speakerNameList.concat(item.name);
    })

    responce.render('index',{
        pageTitle: 'Home',
        pageID: 'home',
        speakerPhoto: 'speakerPhoto',
        SpeakerName: 'speakerName'
    });
});

module.exports = router;
