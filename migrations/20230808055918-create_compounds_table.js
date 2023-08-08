module.exports = {
  async up(queryInterface, Sequelize) {
    // create table compounds: id (number, not auto inc), name (string), image (string url), description (text), created_at, updateda_at
    await queryInterface.createTable("compounds", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("compounds");
  },
};
