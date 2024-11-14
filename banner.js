const imgbanner = document.getElementById("bannerimg");

function RunBanner(temp) {
  const images = ['./midias/academia2.png', './midias/academia3.png', './midias/academia4.png']; 
  let index = 0;

  setInterval(() => {
    imgbanner.src = images[index];
    index = (index + 1) % images.length;
  }, temp);
}

document.addEventListener("DOMContentLoaded", RunBanner(2500));
