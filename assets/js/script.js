// ? Here I put all my query selectors in one place.
const purchaseMenu = document.querySelector(".purchase-menu");
const shoppingcart = document.querySelector("#shopping-cart");
const button = document.querySelectorAll(".close-purchase-menu-span");
const navbar = document.querySelector(".navbar");
const menu = document.querySelectorAll(".menu-span");
const mainsection = document.querySelector(".mainsection");

//* Hide the purchase menu on startup

$(document).ready(function () {
  renderPurchases();
  $("#purchase-menu").hide();
});

//* This allows me to toggle on and off my purchase-menu div & adds an animation to the popup.

$(document).ready(function () {
  $("#shopping-cart").click(function () {
    $(".purchase-menu")
      .show()
      .addClass("animation-open")
      .delay(500)
      .queue(function () {
        $(this).removeClass("animation-open");
        next();
      });
    $(document.body).addClass("modal-open");
    $(mainsection).addClass("blur");
  });
});

//* This adds a click listener to the button which causes is to collapse my purchase menu div.

$(document).ready(function () {
  $(".close-purchase-menu-span").click(function () {
    $(mainsection).removeClass("blur");
    $(document.body).removeClass("modal-open");
    $(".purchase-menu").addClass("animation");
    setTimeout(() => {
      $(".purchase-menu").hide().removeClass("animation");
    }, 499);
  });
});

//* Create a popup below the hamburger menu.

$(document).ready(function () {
  $(".menu-span").click(function () {
    $(".menu-nav").hide;
  });
});

let canclick = 1;
$(".menu-span").click(function () {
  if (canclick) {
    const menunav = $(".menu-nav");
    if (menunav.is(":visible")) {
      menunav.addClass("animation-slideup");
      setTimeout(() => {
        $(document.body).removeClass("modal-open");
        menunav.hide().removeClass("animation-slideup");
        $(".menu-span").removeClass("test");
        $(".menu-span:nth-child(1)").removeClass("animation-rotate1");
        $(".menu-span:nth-child(3)").removeClass("animation-rotate2");
        canclick = 1;
      }, 500);
    } else {
      $(document.body).addClass("modal-open");
      menunav.css("display", "flex").addClass("animation-slidein");
      $(".menu-span").addClass("test");
      $(".menu-span:nth-child(1)").addClass("animation-rotate1");
      $(".menu-span:nth-child(3)").addClass("animation-rotate2");
      canclick = 0;
    }
  }
});

$(".menu-nav").on("animationend", function () {
  canclick = 1;
});

$(".menu-span").click(function () {
  fetch("JavaScript/items.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((thing) => {
        console.log(thing);
      });
    })
    .catch((e) => {
      console.log(e);
      21;
    });
});

//* Create cookies, load items from a JSON array etc.
$(document).ready(function () {
  $.getJSON("../assets/JSON/items.json", function (data) {
    for (let a = 0; a < data.length; a++) {
      const product = document.createElement("div");
      if (a % 2 == 0) {
        product.innerHTML = `
          <a href="../tpl/cookies.html">
            <div class="single-product">
              <div class="image">
                <img src="${data[a].image}" alt="${data[a].name}">
              </div>
              <div class="description">
                <h3>${data[a].name}</h3>
                <p>${data[a].description}</p>
              </div>
            </div>
          </a>
        `;
      } else {
        product.innerHTML = `
          <a href="../tpl/cookies.html">
            <div class="single-product">
              <div class="description">
                <h3>${data[a].name}</h3>
                <p>${data[a].description}</p>
              </div>
              <div class="image">
                <img src="${data[a].image}" alt="${data[a].name}">
              </div>
            </div>
          </a>
        `;
      }
      $(".image-and-description").append(product);
    }
  });
});

const what = () => {
  $.getJSON("../assets/JSON/people.json", function (data) {
    data.forEach((item) => {
      console.log(item);
    });
  });
};
$(document).ready(function () {
  $.getJSON("JSON/people.json", function (data) {
    data.forEach((element) => {
      const person = document.createElement("div");
      $(person).addClass("person");
      person.innerHTML = `
            <p id = "element-name">${element.name}</p>
            <img src = ${element.image}>
            <p> " ${element.description}"</p>
            `;

      $("#our-people").append(person);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("get-to-know-us");
  const text = textElement.textContent;
  textElement.innerHTML = "";

  // Wrap each letter in a span
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    textElement.appendChild(span);
  }

  function animateText() {
    const spans = textElement.querySelectorAll("span");
    let index = 0;

    function changeLetter() {
      if (index < spans.length) {
        const currentSpan = spans[index];

        // Apply the style changes
        currentSpan.style.color = "orange";

        // Revert the style changes after 1 second
        setTimeout(() => {
          currentSpan.style.fontSize = "";
          currentSpan.style.color = "";
        }, 1000);

        index++;
        setTimeout(changeLetter, 100);
      }
    }

    changeLetter();
  }

  animateText();
});

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  item.addEventListener("click", (ev) => {
    console.log("allah");
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
      2;
    }
  });
});

const spanny = document.getElementsByClassName("spanny");
let isclicked = 0;

$(spanny).on("click", function () {
  console.log("click");

  if (isclicked === 0) {
    console.log("123?");
    $(spanny).css("background-color", "white");
    isclicked = 1;
  } else {
    $(spanny).css("background-color", "black");
    isclicked = 0;
  }
});
