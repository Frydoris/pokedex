var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/pokedex', { useNewUrlParser: true, useUnifiedTopology: true });

require('./models/Pokemon')
require('./models/Type')

var app = express()

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use('/', require('./routes/pokemons'))

app.use('/types', require('./routes/types'))

nunjucks.configure('views',{
    autoescape: true,
    express: app
})

/*app.get('/', (req, res)=>{
    res.send ('salut')
})*/

console.log('Pokedex lancé sur le port 3000')
app.listen(3000); 