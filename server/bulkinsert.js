// const data = require('../data.js');
// const pgp = require('pg-promise')();
// const cn = process.env.DATABASE_URL;
// const db = pgp(cn);
// const app = require('../app.js');
// // bulk insert on start
// // performance-optimized, reusable set of columns:
// const cs = new pgp.helpers.ColumnSet(
//   ['question', 'answer', 'sourceurl', 'sourcetitle', 'tag'],
//   {table: 'questions'}
// );
// // generating a multi-row insert query:
// const query = pgp.helpers.insert(data, cs);
// // executing the query:
// db.none(query)
//   .then(data=> {
//       // console.log('inserted ', data);
//   })
//   .catch(error=> {
//       throw new Error(error);
//   });
