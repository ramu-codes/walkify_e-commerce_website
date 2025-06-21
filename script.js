let searchform = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');
let cartItemCount = 0;

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () => {
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 30) {
        document.querySelector('header').classList.add('header-active');
    } else {
        document.querySelector('header').classList.remove('header-active');
    }
}

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartCount.textContent = cartItems.length;
}

function addToCart(name, price, image) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, price, image });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function deleteItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}



function toggleFavorite(event, productId) {
    const icon = event.target;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        icon.classList.replace('fas', 'far');
    } else {
        favorites.push(productId);
        icon.classList.replace('far', 'fas');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.getElementById('favorite-count').textContent = favorites.length;

    const favoriteIcons = document.querySelectorAll('.products .box .btn i');
    favoriteIcons.forEach(icon => {
        const productId = parseInt(icon.closest('.box').getAttribute('data-product-id'));
        if (favorites.includes(productId)) {
            icon.classList.replace('far', 'fas');
        } else {
            icon.classList.replace('fas', 'far');
        }
    });
}

window.onload = function() {
    updateCart();
    updateFavoriteCount();
};


// document.querySelector('.btn').addEventListener('click', function () {
//     // Open a new tab with a form
//     const newTab = window.open('', '_blank');
//     newTab.document.write(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Product Form</title>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             margin: 20px;
//           }
//           form {
//             max-width: 400px;
//             margin: auto;
//             padding: 20px;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             background: #f9f9f9;
//           }
//           label {
//             display: block;
//             margin: 10px 0 5px;
//           }
//           input, textarea {
//             width: 100%;
//             padding: 8px;
//             margin-bottom: 15px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//           }
//           button {
//             padding: 10px 20px;
//             background-color: #007BFF;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//           button:hover {
//             background-color: #0056b3;
//           }
//         </style>
//       </head>
//       <body>
//         <form>
//           <h2>Product Details</h2>
//           <label for="productName">Product Name:</label>
//           <input type="text" id="productName" name="productName" placeholder="Enter product name" required>
          
//           <label for="productPrice">Price:</label>
//           <input type="number" id="productPrice" name="productPrice" placeholder="Enter product price" required>
          
//           <label for="description">Description:</label>
//           <textarea id="description" name="description" rows="4" placeholder="Enter product description"></textarea>
          
//           <button type="submit">Submit</button>
//         </form>
//       </body>
//       </html>
//     `);
//   });
  


    document.querySelector('.btn').addEventListener('click', function () {
      // Open a popup window
      const popup = window.open('', 'popupForm', 'width=600,height=1000', 'padding=40px');
      popup.document.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Order Form</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; color: #333;">

  <div style="max-width: 800px; margin: 0 auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);">
    <h1 style="text-align: center; color: #007BFF;">Product Order Form</h1>

    <!-- Product Section -->
    <section style="margin-bottom: 20px;">
      <h2 style="text-align: center; color: #007BFF;">Products</h2>
      <div style="display: flex; justify-content: space-between; gap: 10px;">
        <!-- Product 1 -->
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; transition: background 0.3s ease; flex: 1; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="tshirt.png" alt="White T-Shirt" style="max-width: 100%; height: auto; border-radius: 5px;">
          <p>White T-Shirt</p>
          <p style="font-weight: bold; color: #007BFF; font-size: 1.2em;">$30.00</p>
          <label>Quantity: <input type="number" min="1" value="1" style="padding: 5px; width: 60%;"></label>
          <label>Size: 
            <select style="padding: 5px; width: 70%; margin-top: 5px;">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </label>
        </div>

        <!-- Product 2 -->
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; transition: background 0.3s ease; flex: 1; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="sweatshirt.png" alt="Sweatshirt" style="max-width: 100%; height: auto; border-radius: 5px;">
          <p>Sweatshirt</p>
          <p style="font-weight: bold; color: #007BFF; font-size: 1.2em;">$100.00</p>
          <label>Quantity: <input type="number" min="1" value="1" style="padding: 5px; width: 60%;"></label>
          <label>Color: 
            <select style="padding: 5px; width: 70%; margin-top: 5px;">
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </label>
        </div>

        <!-- Product 3 -->
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; flex: 1; opacity: 0.5; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
          <img src="shoes.png" alt="Shoes" style="max-width: 100%; height: auto; border-radius: 5px;">
          <p>Shoes</p>
          <p style="font-weight: bold; color: red;">Sold Out</p>
        </div>
      </div>
    </section>

    <!-- Coupon Section -->
    <section style="text-align: center; margin-bottom: 20px;">
      <label style="font-weight: bold;">Enter Coupon Code: 
        <input type="text" placeholder="Enter coupon code" style="padding: 10px; width: 200px; margin-right: 10px; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;"></label>
      <button style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">Apply</button>
    </section>

    <!-- Payment Section -->
    <section style="margin-bottom: 20px;">
      <h2 style="text-align: center; color: #007BFF;">Credit Card</h2>
      <div style="display: flex; justify-content: space-between; gap: 10px;">
        <input type="text" placeholder="First Name" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
        <input type="text" placeholder="Last Name" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
      </div>
      <div style="display: flex; justify-content: space-between; gap: 10px; margin-top: 10px;">
        <input type="text" placeholder="Card Number" style="padding: 10px; width: 70%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
        <input type="text" placeholder="MM/YY" style="padding: 10px; width: 20%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
      </div>
      <div style="display: flex; justify-content: space-between; gap: 10px; margin-top: 10px;">
        <input type="text" placeholder="CVV" style="padding: 10px; width: 20%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
      </div>
    </section>

    <!-- Billing Address Section -->
    <section style="margin-bottom: 20px;">
      <h2 style="text-align: center; color: #007BFF;">Billing Address</h2>
      <input type="text" placeholder="Street Address" style="padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease;">
      <input type="text" placeholder="City" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease; margin-top: 10px;">
      <input type="text" placeholder="State/Province" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease; margin-top: 10px;">
      <input type="text" placeholder="Postal/Zip Code" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease; margin-top: 10px;">
      <input type="text" placeholder="Country" style="padding: 10px; width: 45%; border: 1px solid #ccc; border-radius: 5px; transition: border-color 0.3s ease; margin-top: 10px;">
    </section>

    <!-- Submit Section -->
    <section style="text-align: center; margin-bottom: 20px;">
      <button style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">Submit</button>
    </section>
  </div>
</body>
</html>
      `);
    });


// Open Popup when image is double-clicked
function openPopup(event, productId) {
    // Show the popup
    document.getElementById("purchase-popup").style.display = "block";
    
    // Optionally, you can use productId for dynamic content like price etc.
    // Example: Set product name and price dynamically based on productId
    // document.getElementById("product-name").innerText = "Nike Shoes";
    // document.getElementById("product-price").innerText = "$170.00";
}

// Close the Popup when close button is clicked
function closePopup() {
    document.getElementById("purchase-popup").style.display = "none";
}

// Optional: Close popup if user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById("purchase-popup")) {
        closePopup();
    }
}
