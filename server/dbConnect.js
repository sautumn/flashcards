const models = require('./models/index')

// Start connection to remote db
const dbConnection = models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful to ElephantSQL database! 🐘');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

module.exports = dbConnection;
