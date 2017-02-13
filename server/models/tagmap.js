// created model via command line using sequelize
// i.e. : sequelize model:create --name schema_name --attributes title:string
// refactored to es6 syntax

module.exports = (sequelize, DataTypes) => {
  const Tagmap = sequelize.define('Tagmap', {
    question_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        //TODO: add foreign keys as question_id and tag_id
        // associations can be defined here
      }
    }
  });
  return Tagmap;
};
