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
      if(i === cart.length - 1 && cart.length !== 1) inventory += 'and ';
      inventory += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
    }
    return inventory + '.';
  }
}

function total() {
  var cart = getCart();
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  var cart = getCart();
  for(var i = 0; i < cart.length; i++) {
    if(cart[i]['itemName'] !== item) continue;
    
    cart.splice(i, 1);
    break;
  }
  setCart(cart);
}

function placeOrder(cardNumber) {
  // write your code here
}
