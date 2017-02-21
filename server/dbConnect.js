// Run psql DATABASE_URL -f makeQuestionsTable.sql
// Using ElephantSQL url as ENV var
const data = require('../data.js');
const pgp = require('pg-promise')();
const cn = process.env.DATABASE_URL;
const db = pgp(cn);


let sco = null; // shared connection object;
db.connect()
  .then(obj => {
      sco = obj; // save the connection object;
      return sco.query('SELECT NOW() AS "theTime"');
  })
  .then(data => {
      console.log('Database connected!');
  }, error => {
      console.log(error);
  });

  // performance-optimized, reusable set of columns:
const cs = new pgp.helpers.ColumnSet(
  ['question', 'answer', 'sourceurl', 'sourcetitle', 'tag'],
  {table: 'questions'}
);

  // input values:
// const values = data;

// generating a multi-row insert query:
const query = pgp.helpers.insert(data, cs);
//=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')
console.log(data);
// executing the query:
db.none(query)
  .then(data=> {
      // success;
      console.log('inserted ', data);
  })
  .catch(error=> {
      // error;
  });
