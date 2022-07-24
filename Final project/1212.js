let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat6 = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4.5 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.2 + "px";
  river.style.top = value + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  nouvil.style.fontSize = value + "px";
  if (scrollY >= 67) {
    nouvil.style.fontSize = 67 + "px";
    nouvil.style.position = "fixed";
    if (scrollY >= 478) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }
    if (scrollY >= 93) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
var images = [
  "img/1957 Mercedes 300SL Gullwing/1.jfif",
  "img/1957 Mercedes 300SL Gullwing/3.jfif",
  "img/1957 Mercedes 300SL Gullwing/4.jfif",
  "img/1957 Mercedes 300SL Gullwing/5.jfif",
  "img/1957 Mercedes 300SL Gullwing/6.jfif"
];

var index = 0;

function changeImages() {
  imageSlideShow1.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout("changeImages()", 1000);
}

changeImages();
var images = [
  "img/1960s Jaguar E-Type/2.jfif",
  "img/1960s Jaguar E-Type/3.jfif",
  "img/1960s Jaguar E-Type/4.jfif",
  "img/1960s Jaguar E-Type/5.jfif",
  "img/1960s Jaguar E-Type/6.jfif",
];

var index = 0;

function changeImages() {
  imageSlideShow2.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout("changeImages()", 1000);
}

changeImages();
var images = [
  "img/Aston Martin DB5/2.jfif",
  "img/Aston Martin DB5/3.jfif",
  "img/Aston Martin DB5/4.jfif",
  "img/Aston Martin DB5/5.jfif",
  "img/Aston Martin DB5/6.jfif",
];

var index = 0;

function changeImages() {
  imageSlideShow3.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout("changeImages()", 1000);
}

changeImages();
var images = [
  "1953 Chevrolet Corvette/1.jfif",
  "1953 Chevrolet Corvette/2.jfif",
  "1953 Chevrolet Corvette/3.jfif",
  "1953 Chevrolet Corvette/4.jfif",
  "1953 Chevrolet Corvette/5.jfif",
  "1953 Chevrolet Corvette/6.jfif",
];

var index = 0;

function changeImages() {
  imageSlideShow4.src = images[index];
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout("changeImages()", 1000);
}

changeImages();
