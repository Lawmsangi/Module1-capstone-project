// menu variables
const btn = document.getElementById('union-logo');
const close = document.getElementById('menu-close');
const menu = document.getElementById('menu');

// menu functions
btn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

function closedMenu() {
  menu.style.display = 'none';
  document.body.style.overflow = 'scroll';
}
close.addEventListener('click', closedMenu);

menu.addEventListener('click', closedMenu);

// product functions
const productCard = document.getElementById('section-product');
const productHeader = document.createElement('div');
const productContainer = document.createElement('div');
const productOne = document.createElement('div');
const productTwo = document.createElement('div');
const productThree = document.createElement('div');
const productFour = document.createElement('div');
const productFive = document.createElement('div');
const productSix = document.createElement('div');

productHeader.className = 'product-header';
productContainer.className = 'product-container';
productOne.className = 'product-content';
productTwo.className = 'product-content';
productThree.className = 'product-content';
productFour.className = 'product-content';
productFive.className = 'product-content';
productSix.className = 'product-content';

productHeader.innerHTML = `<h2>Main Products</h2>
                            <div class="line"></div>`;
productCard.appendChild(productHeader);

productOne.innerHTML = `
      <div class="product-image">
        <img src="images/1.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Bubu Dudu Sleeping Hoodie</h4>
        <span>&#8377 999</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productTwo.innerHTML = `
      <div class="product-image">
        <img src="images/2.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Bubu Dudu King Hoodie</h4>
        <span>&#8377 999</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productThree.innerHTML = `
      <div class="product-image">
        <img src="images/3.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Bubu Dudu Sleeping Hoodie</h4>
        <span>&#8377 999</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productFour.innerHTML = `
      <div class="product-image">
        <img src="images/4.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Bubu Dudu Happy Birthday White Cushion</h4>
        <span>&#8377 499</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productFive.innerHTML = `
      <div class="product-image">
        <img src="images/5.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Happy Anniversary Bubu Dudu Magic Mug</h4>
        <span>&#8377 499</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productSix.innerHTML = `
      <div class="product-image">
        <img src="images/6.jpeg" alt="product-image">
      </div>
    <div class="product-details">
        <h4>Bubu Dudu(Bear Panda) Soft Toys/Plushies/Teddy</h4>
        <span>&#8377 1800</span> &#8377 799
        <hr class="line-black">
        <img src="images/truck.svg" alt="truck" style="color:grey">
        Standard shipping in 10 working days
    </div>`;

productContainer.appendChild(productOne);
productContainer.appendChild(productTwo);
productContainer.appendChild(productThree);
productContainer.appendChild(productFour);
productContainer.appendChild(productFive);
productContainer.appendChild(productSix);
productCard.appendChild(productContainer);