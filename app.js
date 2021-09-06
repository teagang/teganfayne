const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/landing')
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/skills', (req, res) => {
    res.render('pages/skills');
});

app.get('/gallery', (req, res) => {
    res.render('pages/gallery');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/secondgallery', (req, res) => {
    res.render('pages/secondgallery');
});

app.get('/testpage', (req, res) => {
    res.render('pages/testpage');
});

app.get('/linksGallery', (req, res) => {
    res.render('pages/linksGallery');
});

app.get('/newlanding', (req, res) => {
    res.render('pages/newlanding');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
