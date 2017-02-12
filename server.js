const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const APP_DIR = path.resolve(__dirname, 'src/client');

const app = express();
app.use(morgan('combined'));

//allows for the other files to be loaded
app.use('/static', express.static(path.join(APP_DIR,'/src/client/app/public')));

app.get('/', (req, res) => {
  console.log(APP_DIR +'/index.html');
  res.sendFile(path.join(APP_DIR + '/index.html'));
});

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(8081, () => {
   console.log('Example app listening at 8081');
});
