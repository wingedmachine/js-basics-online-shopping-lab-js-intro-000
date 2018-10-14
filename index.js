
function getCart() {
  var cart = [];
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart();
  return cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
