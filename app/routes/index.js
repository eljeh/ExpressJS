var express = require('express');
var router = express.Router();

router.get('/', function(request, responce) {
    responce.send(`
        <div class="card-block">
            <h2 class="card-title">Welcome</h2>
            <p class="card-text">Typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
            <a href="/speakers" class="btn btn-primary">Speakers</a>
        </div>  
    `);
});

module.exports = router;
