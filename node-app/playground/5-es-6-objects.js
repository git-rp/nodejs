//Object property short hand

const name = 'Rahul';
const userAge = 41;

const user = {
  name,
  age: userAge,
  location: 'India',
};

console.log(user);

//Object destructring

const product = {
  label: 'book',
  stock: 300,
  price: 2,
  salePrice: undefined,
  rating: 4.3,
};

// const label = product.label;
// const stock = product.stock;

const { label: prodcutLable, stock, rating = 5 } = product;

console.log(prodcutLable);
console.log(stock);
console.log(rating);

const trasaction = (type, { label, stock }) => {
  console.log(label);
  console.log(type);
  console.log(stock);
};

trasaction('order', product);
