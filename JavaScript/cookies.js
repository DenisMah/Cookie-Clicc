//TODO

//! Create items on the page and add them to the LocalStorage, creating a button to remove each item from the local storage.

//? Firstly load all the items from my JSON Array using fetch
//? Second, load the items on my page
//? Create modals for each product using forEach loop
//? Add the item to the localStorage & it's quantity
//? Load the purchase-menu div for each item in the localstorage
//?

$(document).ready(function () {
  $.ajax({
    url: "JSON/cookies-items.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      data.forEach((dataitem) => {
        const cookiediv = document.createElement("div");
        cookiediv.innerHTML = `
        <img src = "${dataitem.image}">
        <h4>${dataitem.name}</h4>
        <p>${dataitem.price}</p>
        `;
        cookiediv.classList.add("cookie");
        $("#cookies").append(cookiediv);

        cookiediv.addEventListener("click", (ev) => {
          const modaldiv = document.createElement("div");
          modaldiv.classList.add("bigModal");
          modaldiv.innerHTML = `
            <div class = "cookie-modal"> 
                <div class = "cookie-modal-image">
                    <img src = "${dataitem.image}">
                </div>
                <div class = "cookie-modal-description">
                        <p> ${dataitem.name}</p>
                        <p> ${dataitem.price} $</p>
                </div>
            </div>
          `;
          document.body.append(modaldiv);
        });
      });
    },
  });
});
