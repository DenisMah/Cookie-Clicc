//TODO

//! Create items on the page and add them to the LocalStorage, creating a button to remove each item from the local storage.

//? Firstly load all the items from my JSON Array using fetch
//? Second, load the items on my page
//? Create modals for each product using forEach loop
//? Add the item to the localStorage & it's quantity
//? Load the purchase-menu div for each item in the localstorage
//?

let id = 0;

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
          ev.preventDefault();
          id++;
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
                        <button id = "button-purchase">Purchase</button>
                        <input type = "number" id = "cookieamount" min = "1" max = "10" placeholder = "Enter cookie amount" value = "1">  
                        <button id = "button-close">CLOSE</button>
                </div> 
            </div>
          `;
          document.body.append(modaldiv);

          let value = document.querySelector("#cookieamount");
          const closebutton = document.querySelector("#button-close");

          closebutton.addEventListener("click", () => {
            modaldiv.remove();
          });

          value.addEventListener("input", (e) => {
            value = e.target.value;
          });

          value = $("#cookieamount").val();
          dataitem.quantity = value;
          const button = document.getElementById("button-purchase");

          button.addEventListener("click", () => {
            modaldiv.remove();
            toastr.success("Thanks for the purchase!");
            localStorage.setItem(`  ${id} ${dataitem.name}`, value);

            const div = document.createElement("div");

            div.innerHTML = `
            ${dataitem.name}
            `;
            div.classList.add("cart");

            $("#purchase-menu").append(div);
          });
        });
      });
    },
  });
});
