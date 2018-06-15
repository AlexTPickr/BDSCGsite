module.exports = function(app, db) {

    app.get('/cards/:rarity', (req, res) => {
        var dbo = db.db("dbsuperdb");
        var rarity = req.params.rarity.toUpperCase();
        if (rarity == 'C' || rarity == 'UC' || rarity == 'R') {
            var query = { 'rarity' : rarity };
            dbo.collection("cards").find(query).toArray((err, result) => {
                if (err) { 
                    res.send({ 'error': 'An error has occurred' }); 
                } else {
                    console.log(result);
                    res.send(result);
                }
            });
        } else {
            res.send({'error' : 'query not accepted!'})
        }
    });

    app.get('/cards', (req, res) => {
        var dbo = db.db("dbsuperdb");
        dbo.collection("cards").find({}).toArray((err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
};