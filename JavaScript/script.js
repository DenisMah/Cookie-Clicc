// ? Here I put all my query selectors in one place.
const purchaseMenu = document.querySelector('.purchase-menu');
const shoppingcart = document.querySelector('#shopping-cart');
const button = document.querySelectorAll('.close-purchase-menu-span');
const navbar = document.querySelector('.navbar')
const menu = document.querySelectorAll('.menu-span')
const mainsection = document.querySelector('.mainsection');

//* This allows me to toggle on and off my purchase-menu div & adds an animation to the popup.

$(document).ready(function(){
    $('#shopping-cart').click(function(){
        $('.purchase-menu')
        .show()
        .addClass('animation-open')
        .delay(500)
        .queue(function(){
            $(this).removeClass("animation-open")
            next();
        })
    })
})

//* This adds a click listener to the button which causes is to collapse my purchase menu div.



$(document).ready(function() {
    $(".close-purchase-menu-span").click(function() { // Use a class selector for the buttons
      $(".purchase-menu").addClass("animation"); // Add the animation class
      setTimeout(() => {
        $(".purchase-menu").hide().removeClass("animation"); // Hide and remove the animation class
      }, 499); // Wait for 499 milliseconds before hiding
    });
  });
  

//* Create a popup below the hamburger menu.


$(document).ready(function(){
    $('.menu-span').click(function(){
        $('.menu-nav').hide
    })
})


let canclick = 1;
$('.menu-span').click(function() {
    if (canclick) {
        const menunav = $('.menu-nav');
        if (menunav.is(':visible')) {
            menunav.addClass('animation-slideup');
            setTimeout(() => {
                menunav.hide().removeClass('animation-slideup');
                $('.menu-span').removeClass('test');
                $('.menu-span:nth-child(1)').removeClass('animation-rotate1');
                $('.menu-span:nth-child(3)').removeClass('animation-rotate2');
                canclick = 1;
            }, 500);
        } else {
            menunav.css('display', 'flex').addClass('animation-slidein');
            $('.menu-span').addClass('test');
            $('.menu-span:nth-child(1)').addClass('animation-rotate1');
            $('.menu-span:nth-child(3)').addClass('animation-rotate2');
            canclick = 0;
        }
    }
});



// Reset canclick on animation end
$('.menu-nav').on('animationend', function() {
    canclick = 1;
});

//* JQuery part of the code 

HashChangeEvent
