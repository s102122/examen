const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

var db

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if(err) return console.log(err)
    db = client.db('examen')

    app.listen(3000, function() {
        console.log('listening on 3000')
    })
})

app.get('/', (request, response) => {
    db.collection('inhaal').find().toArray((err, result) => {
        if(err) return console.log(err)			
		
		response.render('add.ejs', {inhaal: result})
    })
})

app.post('/add', (request, response) => {
	
	var save = false
	
	if(db.collection('inhaal').find( { naam: request.body.naam, reden: request.body.reden, tijd: request.body.examen } ).toArray().length == 0) {
	}				
		db.collection('inhaal').save(request.body, (err, result) => {
		if(err) return console.log(err)

			console.log('saved to database')
			response.redirect('/')			
	})	
			
})

app.get('/search', (request, response) => {
	db.collection('inhaal').find( { naam: request.body.naam }).sort({name:1}).toArray((err, result) => {
		response.render('search.ejs', {inhaal: result})
	})
})