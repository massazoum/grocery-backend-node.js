'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const groceryProducts = [
      {
        name: 'Apples',
        price: 1.99,
        description: 'Fresh apples from the local orchard.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bananas',
        price: 0.99,
        description: 'Ripe and delicious bananas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oranges',
        price: 2.49,
        description: 'Sweet and juicy oranges.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tomatoes',
        price: 1.79,
        description: 'Vine-ripened tomatoes for your salads.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cucumbers',
        price: 0.89,
        description: 'Crispy cucumbers for snacking.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Milk',
        price: 2.29,
        description: 'Fresh dairy milk for your cereal.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eggs',
        price: 1.99,
        description: 'Farm-fresh eggs for your breakfast.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bread',
        price: 2.49,
        description: 'Artisanal bread for your sandwiches.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken',
        price: 6.99,
        description: 'Boneless chicken breast for your recipes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pasta',
        price: 1.29,
        description: 'Italian pasta for your favorite dishes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('GroceryProducts', groceryProducts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GroceryProducts', null, {});
  },
};
