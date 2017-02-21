// Run psql DATABASE_URL -f makeQuestionsTable.sql
// Using ElephantSQL url as ENV var
const data = require('../data.js');
const pgp = require('pg-promise')();
const cn = process.env.DATABASE_URL;
const db = pgp(cn);
const app = require('../app.js');

console.log('app',app);

db.connect()
  .then(obj => {
      sco = obj; // save the connection object;
  })
  .then(data => {
    console.log('Database connected!');
  }, error => {
    throw new Error(error);
  });

// bulk insert on start
// performance-optimized, reusable set of columns:
const cs = new pgp.helpers.ColumnSet(
  ['question', 'answer', 'sourceurl', 'sourcetitle', 'tag'],
  {table: 'questions'}
);
// generating a multi-row insert query:
const query = pgp.helpers.insert(data, cs);
// executing the query:
db.none(query)
  .then(data=> {
      // console.log('inserted ', data);
  })
  .catch(error=> {
      throw new Error(error);
  });

exports.getAllQuestions = (req, res) => {
  db.query('SELECT * FROM questions')
  .then( data => {
    res.send(JSON.stringify(data));
  })
  .catch( err => {
    console.log(err);
  });
};

exports.getTagQuestions = (req, res) => {
  // console.log(req.params.tag)
  db.query(`SELECT * FROM questions WHERE tag='${req.params.tag}'`)
    .then( data => {
      res.send(JSON.stringify(data));
    })
    .catch( err => {
      console.log(err);
    });
};
