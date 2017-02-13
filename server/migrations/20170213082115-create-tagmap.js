'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tagmaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.INT
      },
      tag_id: {
        type: Sequelize.ID
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tagmaps');
  }
};

//TODO: add foreign keys as question_id and tag_id 
