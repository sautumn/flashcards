const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const APP_DIR = path.resolve(__dirname, 'src/client');

// Establish connection to database
require('./server/dbConnect');

const app = express();

app.use(morgan('dev1'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
  extended: true
}));

//host static files
app.use(express.static(APP_DIR));

app.get('/', (req, res) => {
  res.sendFile(path.join(APP_DIR + '/index.html'));
});

app.listen(8081, () => {
   console.log('Local server listening at 8081! 😎');
});
