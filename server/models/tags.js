// created model via command line using sequelize
// i.e. : sequelize model:create --name schema_name --attributes title:string
// refactored to es6 syntax

module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Tags;
};
