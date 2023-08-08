"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // create table test: id, name, createdAt, updatedAt
    await queryInterface.createTable("test", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    // drop table test
    await queryInterface.dropTable("test");
  },
};
