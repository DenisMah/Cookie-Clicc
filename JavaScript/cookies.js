//? ID is here so that the localStorage can create mutliple objects of the same quantity.
let id = 0;

//* When the document is ready, load the data from the cookies-items JSON and load it to the page.
$(document).ready(function () {
  $.ajax({
    url: "JSON/cookies-items.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      data.forEach((dataitem) => {
        const cookiediv = document.createElement("div");
        cookiediv.innerHTML = `
        <img src="${dataitem.image}">
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
            <div class="cookie-modal"> 
                <div class="cookie-modal-image">
                    <img src="${dataitem.image}">
                    <button><a href = "product.html"> VIEW MORE </a></button>
                </div>
                <div class="cookie-modal-description">
                        <p>${dataitem.name}</p>
                        <p>${dataitem.price} $</p>
                        <button id="button-purchase">Purchase</button>
                        <input type="number" id="cookieamount" min="1" max="10" placeholder="Enter cookie amount" value="1">  
                        <button id="button-close">CLOSE</button>
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
          const button = document.getElementById("button-purchase");

          button.addEventListener("click", () => {
            modaldiv.remove();
            toastr.success("Thanks for the purchase!");
            localStorage.setItem(`${id} ${dataitem.name}`, value);
            renderPurchases();
          });
        });
      });
    },
  });
});

//* Function that renders the purchases from the localStorage.
const renderPurchases = () => {
  const pmenu = document.querySelector("#purchase-menu");
  pmenu.innerHTML = `
  <span class="close-purchase-menu-span"></span>
  <span class="close-purchase-menu-span"></span>
  `;

  //*Loop through each object in the localStorage and render them on the purchase menu.
  Object.keys(localStorage).forEach((key) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="cart">
      <p>ID: ${key}</p>
      <p>Quantity: ${localStorage.getItem(key)}</p>

      <div class = "minusiplus">
      <p class="decrease"> - </p>
      <p class="increase"> + </p> 
      </div>
   
    </div>
    `;

    $("#purchase-menu").append(div);

    //* Event listeners for increasing and decreasing the amount ordered.

    //*Decrease the amount ordered
    div.querySelector(".decrease").addEventListener("click", () => {
      let currentQuantity = parseInt(localStorage.getItem(key));
      if (currentQuantity > 1) {
        localStorage.setItem(key, currentQuantity - 1);
      } else {
        localStorage.removeItem(key);
      }
      renderPurchases();
    });

    //* Increase the amount ordered
    div.querySelector(".increase").addEventListener("click", () => {
      let currentQuantity = parseInt(localStorage.getItem(key));
      localStorage.setItem(key, currentQuantity + 1);
      renderPurchases();
    });
  });
};
