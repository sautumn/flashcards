'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tagmap = sequelize.define('Tagmap', {
    question_id: DataTypes.INT,
    tag_id: DataTypes.ID
  }, {
    classMethods: {
      associate: function(models) {
        //TODO: add foreign keys as question_id and tag_id
        // associations can be defined here
      }
    }
  });
  return Tagmap;
};
