const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Compounds extends Model {}
  Compounds.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Compounds",
      timestamps: true,
      tableName: "compounds",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Compounds;
};
