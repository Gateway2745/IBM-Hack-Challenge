var bodyParser = require('body-parser') ;
require('./db/mongoose') ;
const express = require('express') ;
const passport = require('./passport') ;
const path = require('path') ;
const main_router = require('./routers/main') ;
const auth_router = require('./routers/auth') ;
const friend_router = require('./routers/friend') ;

const app = express() ;

const publicDirectoryPath = path.join(__dirname, '../public') ;

app.set('view engine', 'ejs');
app.set('views', publicDirectoryPath) ;



// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) ;

app.use(passport.initialize()) ;

// Next 5 lines help in parsing input and getting req.body
app.use(bodyParser.urlencoded({ extended: false })) ;
// parse application/json
app.use(bodyParser.json()) ;
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })) ;

app.use(main_router) ;
app.use(auth_router) ;
app.use(friend_router) ;

module.exports = app;