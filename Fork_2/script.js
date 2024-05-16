

// ? Here I put all my query selectors in one place.
const purchaseMenu = document.querySelector('.purchase-menu');
const shoppingcart = document.querySelector('#shopping-cart');
const button = document.querySelectorAll('.close-purchase-menu-span');
const navbar = document.querySelector('.navbar')
const menu = document.querySelectorAll('.menu-span')


//* This allows me to toggle on and off my purchase-menu div & adds an animation to the popup.

shoppingcart.addEventListener('click', ev =>{ 
    purchaseMenu.style.display = 'block';
    purchaseMenu.classList.add('animation-open');
    setTimeout(()=>{

    purchaseMenu.classList.remove('animation-open');
    },499)
    
})


//* This adds a click listener to the button which causes is to collapse my purchase menu div.

button.forEach((buttons) =>{
    buttons.addEventListener('click', ev =>{
        purchaseMenu.classList.add('animation');
        setTimeout(()=>{
            purchaseMenu.style.display= 'none';
            purchaseMenu.classList.remove('animation');
        },499);
    })
})

//* Create a popup below the hamburger menu.

let canclick = 1;

menu.forEach((menuspan) =>{
    menuspan.addEventListener('click', ev =>{
    const menunav = document.createElement('div');
        if(canclick == 1){
        menunav.classList.add('menu-nav')
        menunav.innerHTML = `
        LOL
        `
        navbar.appendChild(menunav)
        menunav.classList.add('animation-slidein')
        menu.forEach(span => span.classList.add('test'));
        menu[0].classList.add('animation-rotate1'); 
        menu[2].classList.add('animation-rotate2'); 
        canclick = 0;
        }
        
        //* This closes the menu
        
        
        if(canclick == 0){
           menu.forEach(span =>{
            span.addEventListener('click', e =>{
                menunav.classList.add('animation-slideup');
                menu[0].classList.remove('animation-rotate1'); 
                menu[2].classList.remove('animation-rotate2'); 
                setTimeout(() =>{
                navbar.removeChild(menunav)
                menu.forEach(span => span.classList.remove('test'));
                
                canclick = 1;
                })
            })
        }) 
        }
    })
})
