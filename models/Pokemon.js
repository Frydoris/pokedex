var mongoose = require('mongoose');

var pokemonSchema = new mongoose.Schema({
name: String,
number : Number,
descrition : String,
picture: String,
types :[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Type'
    }
]

})

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;