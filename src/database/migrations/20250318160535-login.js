'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('logins', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down (queryInterface) {
    return queryInterface.dropTable('logins');
  }
};
