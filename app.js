const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const APP_DIR = path.resolve(__dirname, 'src/client');
// Establish connection to database
const db = require('./server/dbConnect');

// add all files into db
// db.bulkInsert();

const app = express();

app.use(morgan('dev1'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
  extended: true
}));

//host static files
app.use(express.static(APP_DIR));

// Main index.html page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(APP_DIR + '/index.html'));
// });

// Route to retrieve all cards from the db
app.get('/api/cards', (req, res) => {
  db.getAllQuestions(req, res);
});

// Route to retrieve specific tag cards from the db
// case sensitive 😤
app.get('/api/cards/:tag', (req, res) => {
  db.getTagQuestions(req, res);
});

app.listen(8081, () => {
   console.log('Local server listening at 8081! 😎');
});

module.exports = app;
