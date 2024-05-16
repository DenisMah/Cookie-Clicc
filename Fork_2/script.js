
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

menu.forEach((menuspan) =>{
    menuspan.addEventListener('click', ev =>{
        const menunav = document.createElement('div');
        menunav.classList.add('menu-nav')
        menunav.innerHTML = `
        <span class='menuspan-close'></span><span class='menuspan-close'></span>
        `
        navbar.appendChild(menunav)
        menunav.classList.add('animation-slidein')


        //* This closes the menu
        const menuspanclose = document.querySelectorAll('.menuspan-close')

        menuspanclose.forEach((menuitem) =>{
            menuitem.addEventListener('click', ev =>{
                menunav.classList.add('animation-slideup')
                setTimeout(()=>{
                    navbar.removeChild(menunav)
                }, 499)

            })
        })
    })
})


