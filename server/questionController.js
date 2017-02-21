const app = require('../app.js')

console.log('app',app)


export.getAllQuestions = getAllQuestions = (req, res) => {
  res.status(200).send('hello')
  // db.query('SELECT * FROM questions')
  //   .then( data => {
  //     res.status(200).send('hey');
  //   })
  //   .catch( err => {
  //     res.send('Error in retrieving data from db');
  //   });
};

export.getTagQuestions = getTagQuestions = (req, res) => {
  db.query(`SELECT * FROM questions WHERE tag = ${res.params.tag}`)
    .then( data => {
      res.send('tagcards ', data);
    })
    .catch( err => {
      res.send('Error in retrieving data from db');
    });
};
