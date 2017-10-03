var express = require('express');
var router = express.Router();

router.get('/speakers', function(request, responce) {

    var info = '';
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

    responce.render('speakers',{
        pageTitle: 'Speakers',
        pageID: 'speakers',
        names: speakerNameList,
        photos: speakerPhotoList,
        about: speakerAboutList,
        index: speakerIndexList
    });


    // dataFile.speakers.forEach(function(item) {
    //     info +=`
    //     <li class="list-inline-item p-3">
    //         <div class="card" style="width: 20rem;">
    //             <img class="card-img-top" src="${item.picture}" alt="Card image cap">
    //             <div class="card-block">
    //                 <h4 class="card-title">${item.name}</h4>
    //                 <p class="card-text">${item.about}</p>
    //                 <a href="/speakers/${item.index}" class="btn btn-primary" >More Info >></a>
    //             </div>
    //         </div>
    //     </li>
    //     `
    // });
    // responce.send(`

    //         <h1>Title</h1>
    //         <ul class="list-inline">

    //             ${info}

    //         </ul>

    //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    //     <script src="/reload/reload.js"></script>
        
    // `);
});

router.get('/speakers/:index', function(request, responce) {

    var dataFile = request.app.get('appData');
    var speaker = dataFile.speakers[request.params.index];

    responce.send(`

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title><%= siteTitle %> | <%= pageTitle %></title>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
      </head>
      <body>

        <main id="<%= pageID %>">
            <div class="jumbotron" style="background-image: url(http://www.intrawallpaper.com/static/images/cool_abstract_cube_wallpaper_hd_NJhuCRJ.jpg); background-size: cover;background-position: 0% 25%;">
                <div class="container">
                    <img src="${speaker.picture}" alt="${speaker.name}">
                    <h1 class="display-3">${speaker.name}</h1>
                </div>
            </div>    
            <dl>
                <dt>Sex:<dt>
                <dd>${speaker.gender}</dd>
                <dt>Age:</dt>
                <dd>${speaker.age}</dd>
                <dt>Eye Colour:<dt>
                <dd>${speaker.eyeColor}</dd>
                <dt>Company:<dt>
                <dd>${speaker.company}</dd>
                <dt>email:<dt>
                <dd>${speaker.email}</dd>
                <dt>Phone:<dt>
                <dd>${speaker.phone}</dd>
                <dt>Address:<dt>
                <dd>${speaker.address}</dd>
            </dl>
            <p>${speaker.about}</p>
        
            <a href="https://www.google.ca/maps/@${speaker.latitude},${speaker.longitude},15z?hl=en" class="btn btn-primary" target="_blank">Maps</a>
            <script src="/reload/reload.js"></script>
        </main>
    </body>
</html>
    `);
});

module.exports = router;