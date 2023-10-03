module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('GroceryProducts', 'image', {
      type: Sequelize.STRING(1000), 
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('GroceryProducts', 'image');
  },
};
