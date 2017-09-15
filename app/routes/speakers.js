var express = require('express');
var router = express.Router();

router.get('/speakers', function(request, responce) {

    var info = '';
    var dataFile = request.app.get('appData');

    dataFile.speakers.forEach(function(item) {
        info +=`
        <li> 
            <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="${item.picture}" alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">${item.name}</h4>
                    <p class="card-text">${item.about}</p>
                    <a href="/speakers/${item.index}" class="btn btn-primary" >More Info >></a>
                </div>
            </div>
        </li>
        `
    })
    responce.send(`
        <h1>Title</h1>
        <ul>${info}</ul>
                    
    `);
});

router.get('/speakers/:index', function(request, responce) {

    var dataFile = request.app.get('appData');
    var speaker = dataFile.speakers[request.params.index];

    responce.send(`

        <img src="${speaker.picture}" alt="${speaker.name}">
        <h2>${speaker.name}</h2>
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
    `);
});

module.exports = router;