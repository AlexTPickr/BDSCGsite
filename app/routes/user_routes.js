module.exports = function(app, db) {
    app.post('/user/login', (req, res) => {
        res.send( { user : 'something' } );
    });
};