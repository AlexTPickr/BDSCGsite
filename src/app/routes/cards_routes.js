var CardsSchema = require('./schema/cards_schema')

module.exports = function(app, db) {

    app.get('/cards', (req, res) => {
        
        //initial query - returns all in collection
        console.log('query setup');
        query = {};

        //list of all valid inputs

        let rarity = req.query.rarity;
        let name = req.query.rarity;
        let cardId = req.query.cardId;
        let cardColour = req.query.cardColour;
        let type = req.query.type;
        let character = req.query.character;
        let specialTrait = req.query.specialTrait;
        let era = req.query.era;
        let dualAttack = req.query.dualAttack;
        let tripleAttack = req.query.tripleAttack;
        let critical = req.query.critical;

        //construct the query
        

        //run and return results as json
        CardsSchema.find(query, (err, result) => {
            console.log('query ran');
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
};