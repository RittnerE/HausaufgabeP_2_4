const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');
const app = express();

const fileName = './articles/a.json';

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.render('main', { title: "Home Page"});
});

app.get('/article1', (request, response) => {
    const fileName = './articles/a.json';
    if(fs.existsSync(fileName)) {
        console.log('hi2');
        const articleString = fs.readFileSync(fileName, {encoding: 'utf8'});
        const article = JSON.parse(articleString);
        console.log(article);
        response.render('dwayne', {
            title: "Article",
            article: article
        });
    }else{
        response.render('not-found');
    }
});





app.use(express.static('public'));

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});



