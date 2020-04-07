const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('listening on port 3000');
})

app.get('/',function(req,res){
    res.render('home');
})

app.get('/home',function(req,res){
    res.render('home');
})

app.get('/bio',function(req,res){
    res.render('bio');
})

app.get('/gallery',function(req,res){
    res.render('gallery');
})

app.get('/games',function(req,res){
    res.render('games');
})

app.get('/videos',function(req,res){
    res.render('videos');
})

app.get('/isabellaJones',function(req,res){
    res.render('isabellaJones');
})