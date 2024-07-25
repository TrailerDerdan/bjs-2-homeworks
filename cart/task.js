const decBtns = document.querySelectorAll('.product__quantity-control_dec');
const incBtns = document.querySelectorAll('.product__quantity-control_inc');
const amounts = document.querySelectorAll('.product__quantity-value');
const addBtns = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products'); 

decBtns.forEach((decBtn, index) => {
  decBtn.addEventListener('click', function () {
    if (parseInt(amounts[index].textContent) > 0) {
      amounts[index].textContent = parseInt(amounts[index].textContent) - 1;
    }
  });
});

incBtns.forEach((incBtn, index) => {
  incBtn.addEventListener('click', function () {
    amounts[index].textContent = parseInt(amounts[index].textContent) + 1;
  });
});

addBtns.forEach((button, index) => {
  button.addEventListener('click', function () {
    const productElement = button.closest('.product');
    const productId = productElement.dataset.id;
    const productImage = productElement.querySelector('.product__image').src;
    const productQuantity = parseInt(amounts[index].textContent);

    if (productQuantity > 0) {
      addToCart(productId, productImage, productQuantity);
    }
  });
});

function addToCart(id, image, quantity) {
  const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

  if (existingProduct) {
    const countElement = existingProduct.querySelector('.cart__product-count');
    countElement.textContent = parseInt(countElement.textContent) + quantity;
  } else {
    const cartProduct = document.createElement('div'); 
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', id);

    const img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.src = image;

    const count = document.createElement('div');
    count.classList.add('cart__product-count');
    count.textContent = quantity;

    cartProduct.appendChild(img); 
    cartProduct.appendChild(count); 
    
    cartProducts.appendChild(cartProduct); 
  }
}
