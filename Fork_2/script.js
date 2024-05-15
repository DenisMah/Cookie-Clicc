
//

const purchaseMenu = document.querySelector('.purchase-menu');
const shoppingcart = document.querySelector('#shopping-cart');
const button = document.querySelector('#close-button');


//* This allows me to toggle on and off my purchase-menu div

shoppingcart.addEventListener('click', ev =>{ 
       purchaseMenu.style.display = 'block';
    purchaseMenu.classList.add('animation-open');
    setTimeout(()=>{

    purchaseMenu.classList.remove('animation-open');
    },499)
    
})


//* This adds a click listener to the button which causes is to collapse my purchase menu div.

button.addEventListener('click', ev =>{
    purchaseMenu.classList.add('animation');
    setTimeout(()=>{
        purchaseMenu.style.display= 'none';
        purchaseMenu.classList.remove('animation');
    },499);
})