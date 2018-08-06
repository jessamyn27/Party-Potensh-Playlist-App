//REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')


//DATABASE
require('./db/db');

//SESSIONS
app.use(session({
  secret: cantTellYou,
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


//ROUTES
app.use('/auth/login', authController);
app.use('/api/v1/main', mainController )

//PORT
app.listen(9000, () => {
  console.log('listening on port 9000');
})
