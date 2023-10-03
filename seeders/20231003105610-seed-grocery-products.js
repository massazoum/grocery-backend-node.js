'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const groceryProducts = [
      {
        name: 'Apples',
        price: 1.99,
        description: 'Fresh apples from the local orchard.',
        image: 'https://th.bing.com/th/id/OIP.UXrKKmXr2xkeb33i3DpC8QHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bananas',
        price: 0.99,
        description: 'Ripe and delicious bananas.',
        image: 'https://th.bing.com/th/id/OIP.hBd5NqxuSoDhAI1k5E7WKwHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oranges',
        price: 2.49,
        description: 'Sweet and juicy oranges.',
        image: 'https://th.bing.com/th/id/R.cceb81ce7fb3640b96ff8c458b2699ea?rik=Lm38PAAc%2bh3bIw&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tomatoes',
        price: 1.79,
        description: 'Vine-ripened tomatoes for your salads.',
        image: 'https://th.bing.com/th/id/R.d253f35c7474848f8391d0adb94c13b4?rik=p%2f8aPOiR%2bFAz9A&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f30000%2fvelka%2ffresh-tomatoes.jpg&ehk=EUfCs%2f0gmWvdx5uLX%2bX1UsMMfQcdo1ntVSvEfWhzK54%3d&risl=&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cucumbers',
        price: 0.89,
        description: 'Crispy cucumbers for snacking.',
        image: 'https://th.bing.com/th/id/OIP.XIi2Tzf7nvz4_Kvu1547XAHaFB?pid=ImgDet&rs=1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Milk',
        price: 2.29,
        description: 'Fresh dairy milk for your cereal.',
        image: 'https://th.bing.com/th/id/R.b3cf3ddbb6feb3af0ad83beba411aad8?rik=7rfHFVBUQtIxVg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Ala9o17YasM%2fUiDtRJzL00I%2fAAAAAAAAPIQ%2fVUIwqYENRw0%2fs1600%2fmilk.jpg&ehk=fAVhFZGnDj3XvP1Ib%2bk5zivzkjeaBmhaJJ%2bR%2bSqvfoc%3d&risl=&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eggs',
        price: 1.99,
        description: 'Farm-fresh eggs for your breakfast.',
        image: 'https://th.bing.com/th/id/R.f8134b207dc1af0589a1eb032e9dd254?rik=XY1xS9ovO2kl5A&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bread',
        price: 2.49,
        description: 'Artisanal bread for your sandwiches.',
        image: 'https://th.bing.com/th/id/R.a0e639292d89b1a3be2541c8a6103b07?rik=wXfm9c2Et5Kmfg&riu=http%3a%2f%2fwww.cuisineandhealth.com%2fwp-content%2fuploads%2f2015%2f07%2fbread.jpg&ehk=Bz06VR32pXCftwF1VkIF3AeNbtf3sxUJW8Jwd2hnLmM%3d&risl=&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken',
        price: 6.99,
        description: 'Boneless chicken breast for your recipes.',
        image: 'https://th.bing.com/th/id/R.ccf9f6979e33e1bf1b2814b426fc7324?rik=oFVusE7fj50gOQ&riu=http%3a%2f%2fthemanwhoatesouthjersey.files.wordpress.com%2f2012%2f04%2fchicken.jpg&ehk=m7rbQPXDWI8QrM1p%2bLUomvXuUmjec0UMGun0tXWPSuI%3d&risl=&pid=ImgRaw&r=0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pasta',
        price: 1.29,
        description: 'Italian pasta for your favorite dishes.',
        image: 'https://th.bing.com/th/id/R.cb16f29941c7f0105e2df1c061fff0c5?rik=5682%2fx8DsiDlPg&pid=ImgRaw&r=0',
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
