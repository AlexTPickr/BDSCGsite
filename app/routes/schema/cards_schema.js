var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardsSchema = new Schema({
    _id : Schema.Types.ObjectId,
    cardId : String,
    name : String,
    rarity : String,
    cardColour : String,
    energyCost : Number,
    energyExclusive : Number,
    comboCost : Number,
    comboPower : Number,
    power : Number,
    type : String,
    traits : {
        character : String,
        specialTrait : String,
        era : String
    },
    description : Schema.Types.Mixed,
});

module.exports = mongoose.model('card', CardsSchema);