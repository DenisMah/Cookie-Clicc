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
