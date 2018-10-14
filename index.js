var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart();
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var inventory = 'In your cart, you have ';
    for(var i = 0; i < cart.length; i++) {
      if(i !== 0) inventory += ', ';
      if(i === cart.length && cart.length !== 1) inventory += 'and ';
      inventory += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
    }
    return inventory + '.';
  }
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
