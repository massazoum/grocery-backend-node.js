const express = require('express');
const router = express.Router();
const { GroceryProduct } = require('../../models'); 

// Create a new grocery product
router.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await GroceryProduct.create({ name, price, description });
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create grocery product' });
  }
});

// Retrieve all grocery products
router.get('/', async (req, res) => {
  try {
    const products = await GroceryProduct.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve grocery products' });
  }
});

// Update a grocery product by ID
router.put('/:id', async (req, res) => {
 try {
   const { id } = req.params;
   const { name, price, description } = req.body;

   const product = await GroceryProduct.findByPk(id);

   if (!product) {
     return res.status(404).json({ error: 'Grocery product not found' });
   }

   // Update the product's attributes
   product.name = name;
   product.price = price;
   product.description = description;
   
   // Save the updated product
   await product.save();

   return res.status(200).json(product);
 } catch (error) {
   return res.status(500).json({ error: 'Failed to update grocery product' });
 }
});

// Delete a grocery product by ID
router.delete('/:id', async (req, res) => {
 try {
   const { id } = req.params;

   // Check if the product with the given ID exists
   const product = await GroceryProduct.findByPk(id);

   if (!product) {
     return res.status(404).json({ error: 'Grocery product not found' });
   }

   // Delete the product
   await product.destroy();

   return res.status(204).send(); // 204 No Content response for successful delete
 } catch (error) {
   return res.status(500).json({ error: 'Failed to delete grocery product' });
 }
});

module.exports = router;
