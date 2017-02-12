const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const APP_DIR = path.resolve(__dirname, 'src/client');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/src/client'));

app.use('/src',function(req, res, next) {
  res.send('shut up ');
});
//allows for the other files to be loaded
app.use("/src", express.static(__dirname + '/src'));
// app.use('/static', express.static(path.join(__dirname,'src')));

app.get('/', (req, res) => {
  console.log(APP_DIR +'/index.html');
  res.send('hello world');
});


app.listen(8081, () => {
   console.log('Example app listening at 8081');
});
