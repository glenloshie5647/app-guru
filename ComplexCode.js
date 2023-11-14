/* 
   Filename: ComplexCode.js
   Description: This complex code demonstrates a sophisticated and creative implementation of a fictional online shopping system.
*/

// Define array to store product objects
var products = [];

// Define class for Product
class Product {
   constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
   }
   
   // Method to calculate total cost of product
   calculateTotalCost() {
      return this.price * this.quantity;
   }
}

// Add products to the array
products.push(new Product("iPhone 12", 999, 3));
products.push(new Product("Samsung Galaxy S21", 1099, 5));
products.push(new Product("Google Pixel 5", 899, 2));

// Define class for Shopping Cart
class ShoppingCart {
   constructor() {
      this.items = [];
   }
   
   // Method to add a product to the shopping cart
   addItem(product) {
      this.items.push(product);
   }
   
   // Method to calculate the total cost of all items in the shopping cart
   calculateTotalCost() {
      var totalCost = 0;
      for (var i = 0; i < this.items.length; i++) {
         totalCost += this.items[i].calculateTotalCost();
      }
      return totalCost;
   }
   
   // Method to display the items in the shopping cart
   displayItems() {
      console.log("Shopping Cart Items:");
      for (var i = 0; i < this.items.length; i++) {
         console.log(this.items[i].name + " - Quantity: " + this.items[i].quantity);
      }
   }
}

// Create a shopping cart object
var cart = new ShoppingCart();

// Add products to the shopping cart
cart.addItem(products[0]);
cart.addItem(products[1]);
cart.addItem(products[2]);

// Display the items in the shopping cart
cart.displayItems();

// Calculate and display the total cost of items in the shopping cart
console.log("Total Cost: $" + cart.calculateTotalCost());