module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories',
  });
}