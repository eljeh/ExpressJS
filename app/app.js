var express = require('express');
var app = express();
var dataFile = require('./data/data.json');


app.set('PORT', process.env.PORT || 3000 );

app.get('/', function(request, responce) {
    var info = '';
    responce.send(`
    <div class="card-block">
        <h2 class="card-title">Welcome</h2>
        <p class="card-text">Typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
        <a href="/speakers" class="btn btn-primary">Speakers</a>
    </div>  
    `);
});


app.get('/speakers', function(request, responce) {
    var info = '';
    dataFile.speakers.forEach(function(item) {
        info +=`
        <li> 
            <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="${item.picture}" alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">${item.name}</h4>
                    <p class="card-text">${item.about}</p>
                    <a href="/speakers/${item.index}" class="btn btn-primary" target="_blank">More Info >></a>
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

app.get('/speakers:index', function(request, responce) {

    var speaker = dataFile.speakers[request.params.index]
    responce.send(`
        <h2>${speaker.name}</h2>
        <dl>
            <dt>Sex:<dt>
            <dd>${speaker.gender}</dd>
            <dt>Age:</dt>
            <dd>${speaker.age}</dd>
            <dt>Eye Colour:<dt>
            <dd>${speaker.eyeColor}</dd>
        </dl>
        <p>${speaker.about}</p>
    `);
});


var server = app.listen(app.get('PORT'), function() {
    console.log('Server Started: http://localhost:' + app.get('PORT'));
})

