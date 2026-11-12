// NAVIGATION BAR TOGGLE

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

// PRODUCT DETAIL

const productData = {
  name: "Tactical Anime Hoodie",
  price: 120,
  description:
    "Bahan tebal, lembut, dan menyerap keringat. Jahitan rapi dengan potongan oversized modern yang nyaman dipakai harian maupun aktivitas luar ruangan.",
  images: [
    "asset/wallhaven-qr563d_3840x2160.png",
    "asset/wallhaven-xekg7z_3840x2160.png",
    "asset/wallhaven-6levk6_3840x2160.png",
  ],
  sizes: [
    { size: "S", active: true },
    { size: "M", active: false },
    { size: "L", disabled: true },
    { size: "XL", active: false },
  ],
};

// PRODUCT NAME, PRICE, DESCRIPTION, and IMAGE

document.addEventListener("DOMContentLoaded", () => {
  // NAME
  const productName = document.getElementById("product-name");
  productName.textContent = productData.name;

  // PRICE
  const productPrice = document.getElementById("product-price");
  productPrice.textContent = productData.price.toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
  });

  //DESCRIPTION
  const productDescription = document.getElementById("product-description");
  productDescription.textContent = productData.description;

  // IMAGES
  const mainImage = document.getElementById("main-img");
  mainImage.src = productData.images[0];

  // THUMBNAIL
  const thumbnailContainer = document.getElementById("thumbnail-container");
  productData.images.forEach((imgSrc) => {
    thumbnailContainer.innerHTML += `
      <div class="aspect-square cursor-pointer">
        <img src="${imgSrc}" class="w-full h-full object-cover rounded-lg thumbnail-item" alt="Thumbnail" />
      </div>
    `;
  });

  //THUMBNAIL INTERACTION
  const thumbnails = document.querySelectorAll(".thumbnail-item");
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
      mainImage.src = e.target.src;
    });
  });

  //QUANTITY HANDLER
  const decreaseBtn = document.getElementById("decrease-btn");
  const increaseBtn = document.getElementById("increase-btn");
  const quantityValue = document.getElementById("quantity-value");
  let currentQuantity = 1;
  // (-) BUTTON
  decreaseBtn.addEventListener("click", () => {
    if (currentQuantity > 0) {
      currentQuantity--;
      quantityValue.textContent = currentQuantity;
    }
  });
  // (+) BUTTON
  increaseBtn.addEventListener("click", () => {
    currentQuantity++;
    quantityValue.textContent = currentQuantity;
  });
  // SIZE BUTTON HANDLER
  const sizeButtons = document.querySelectorAll("#size-container .button");
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("disabled")) {
        return;
      }
      sizeButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
});
