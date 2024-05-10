$(document).ready(function() { // Ensure the DOM is loaded

    // Opening Modal Logic 
    const cookie = $('.main'); 

    let cookieprice = 10;
    let cookieRevenue = 0.25;

    let grandmaPrice = 100;
    let grandmaRevenue = 1;

    const purchases = [
        { name: "cursor", price: cookieprice, cookiesPerSecond: cookieRevenue, image: "Images/cursor.png" },
        { name: "Grandma", price: grandmaPrice, cookiesPerSecond: grandmaRevenue, image: "Images/Grandma_new.png" }
    ];

    $('body').append('<div class="openingPopup"></div>'); // Create popup container
    const openingPopup = $(".openingPopup");
    openingPopup.html('<h1>Welcome!</h1><h3>Press anywhere to continue...</h3>');

    openingPopup.click(guideThrough); // Click event on the whole popup

    function guideThrough() {
        openingPopup.html('<h1> Have you ever played cookie clicker ? </h1><h2><span class = "openingButton">YES</span><span>/</span><span class = "openingButton">NO</span></h2>');

        $(".openingButton").click(function(e) { // Event on buttons
            if ($(this).text() === "YES") { 
                openingPopup.addClass("hide");
                createShopName();
            } else {
                openingPopup.addClass("hide");
                createShopName();
            }
        });
    }

    function createShopName() {
        $('body').append('<div class="shopname"></div>');
        const shopname = $(".shopname");
        const bakeryname = $("#bakeryname");
        const sidenav = $(".sideNav");

        shopname.append('<input type="text" class="shopname" placeholder="Input bakery name..." maxlength="24">');

        $('.shopname input').keydown(function(ev) {
            if (ev.key === "Enter") {
                sidenav.removeClass("hide");
                cookie.removeClass('hide')
                bakeryname.text($(this).val()); // Set bakery name
                $(this).remove(); // Remove input
                shopname.remove(); 
            }
        });
    }

    function loadPurchases(purchase) {
        $('.purchases').append(`
            <div class="purchaseItem">
                ${purchase.name}, ${purchase.price}, ${purchase.cookiesPerSecond}
                <img src="${purchase.image}"> 
            </div>
        `);
    }

    function renderPurchases() {
        purchases.forEach(loadPurchases); // forEach is cleaner in this case
    }

    renderPurchases();
});
