const discPercentage = 25;
// let disc = document.getElementById("discount");
let disc = document.getElementsByClassName("discount");
disc[0].textContent = `-${discPercentage}%`;
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-image");

// function changeImage(src, id) {
//   document.getElementById("main-image").src = src;
//   document.getElementById("thumbnail1").classList.remove("active");
//   document.getElementById("thumbnail2").classList.remove("active");
//   document.getElementById("thumbnail3").classList.remove("active");
//   document.getElementById(id).classList.add("active");
// }

thumbnails.forEach((khan) => {
  khan.addEventListener("click", () => {
    mainImage.src = khan.getAttribute("src");

    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    khan.classList.add("active");
  });
});

const priceObj = {
  S: 132.0,
  M: 135.0,
  L: 138.0,
  XL: 145.0,
};

let originalEle = document.getElementById("original-price");
let discountEle = document.getElementById("discounted-price");
const sizeButtons = document.querySelectorAll(".size-selector button");

var bttn = document.getElementById("addToBag");
bttn.style.display = "none";
changeSize("M");

function changeSize(selectedSize) {
  bttn.style.display = "block";
  var btn = document.getElementById(selectedSize);
  sizeButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  btn.classList.add("selected");
  originalEle.textContent = priceObj[selectedSize].toFixed(2);
  calculatePrice(priceObj[selectedSize]);
}

function calculatePrice(price) {
  let discountPrice = discPercentage / 100;
  let finalPrice = (price - price * discountPrice).toFixed(2);
  console.log(finalPrice);
  discountEle.textContent = `$${finalPrice}`;
}
