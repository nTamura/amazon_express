'use strict';
const M = require('../models/index');
const Product = M.Product;
const faker = require('faker');

const products = Array
.from({length:50})
.map(function() {
  return Product.create({
    title: faker.commerce.productName(),
    description: `${faker.company.catchPhrase()} ${faker.hacker.phrase()}`,
    price: faker.commerce.price()
  })
})

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all(products)
    // Product.create({
    //   title: faker.commerce.productName(),
    //   description: `${faker.company.catchPhrase()} ${faker.hacker.phrase()}`,
    //   price: faker.commerce.price()
    // });
  },
  down: function (queryInterface, Sequelize) {
  }
};
