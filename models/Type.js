var mongoose = require('mongoose');

var typeSchema = new mongoose.Schema({
    name: String,
    color : {
        type: String,
        default: 'red'
    }
});

typeSchema.virtual('pokemons',{  //virtual permet de definir des relations entre les diff types
    ref: 'Pokemon',
    localField : '_id',
    foreignField: 'types'
})

var Pokemon = mongoose.model('Type', typeSchema);




