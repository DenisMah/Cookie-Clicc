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
