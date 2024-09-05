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
