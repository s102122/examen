const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

var db

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if(err) return console.log(err)
    db = client.db('inhaal')

    app.listen(3000, function() {
        console.log('listening on 3000')
    })
})

app.get('/', (request, response) => {
    db.collection('examen').find().toArray((err, result) => {
        if(err) return console.log(err)

        response.render('add.ejs', {quotes: result})
    })
})

app.post('/add', (request, response) => {
    db.collection('examen').save(request.body, (err, result) => {
        if(err) return console.log(err)

        console.log('saved to database')
        response.redirect('/')
    })
})