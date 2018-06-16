//rout files
var cardsRoutes = require('./cards_routes');
var userRoutes = require('./user_routes');

//define routes
module.exports = function(app, db) {
  cardsRoutes(app, db);
  userRoutes(app, db);
};