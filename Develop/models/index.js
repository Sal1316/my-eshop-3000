// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');

const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'id',
});
Category.hasMany(Product, {
  foreignKey: 'id',
});
Product.belongsToMany(Tag, {
  foreignKey: 'id',
});
Tag.belongsToMany(Product, {
  foreignKey: 'id',
});


// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


/* TODO: 

Not sure what they want when they say through ProductTag?


*/ 