const data = require('../data.js');
const pgp = require('pg-promise')();
// performance-optimized, reusable set of columns:
var cs = new pgp.helpers.ColumnSet(
  ['question', 'answer', 'sourceurl', 'sourcetitle', 'tag'],
  {table: 'questions'}
);

// input values:
var values = data;

// generating a multi-row insert query:
var query = pgp.helpers.insert(values, cs);
//=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')

// executing the query:
const insert = db.none(query)
    .then(data=> {
        // success;
        console.log('inserted ', data);
    })
    .catch(error=> {
        // error;
    });

module.exports = insert;
