//REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

// set up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//DATABASE
require('./db/db');

// SESSIONS
app.use(session({
  secret: 'cantTellYou',
  resave: false,
  saveUninitialized: false,
}))

//CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));


//CONTROLLERS
const authController = require('./controllers/authController');
const mainController = require('./controllers/mainController');
const spotifyController = require('./controllers/spotifyController');


//ROUTES
app.use('/auth', authController);
app.use('/api/v1/main', mainController );
app.use('/spotify', spotifyController);

//PORT
app.listen(9000, () => {
  console.log('listening on port 9000');
})
