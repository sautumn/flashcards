// ElephantSQL node.js documentation:
// https://www.elephantsql.com/docs/nodejs.html
const pg = require('pg');

const models = require('./models/index')


// // ElephantSQL url
// const dbUrl = 'postgres://fcwpulfc:k-bPlC8Bf-X3n7V8ZT4ftcqDuJ2t80Nb@babar.elephantsql.com:5432/fcwpulfc';
// // ENV var for deployment later
// const connString = process.env.ELEPHANTSQL_URL || dbUrl;
//
// const client = new pg.Client(connString);
//
// client.connect(err => {
//   if (err) {
//     return console.error('Could not connection to database. Line 12 in pgConnection');
//   }
//   client.query('SELECT NOW() AS "theTime"', (err, result) => {
//     if (err) {
//       return console.error('Error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     client.end();
//   });
// });

// const path = require('path');
//
// // const config = require(__dirname + '/server/models/index.js')
// // console.log(config);
// const db = require('./models/index.js')
// console.log(models);
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });
