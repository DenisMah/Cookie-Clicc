const cookie = document.querySelector('.main');
const purchaseDiv = document.querySelector('.purchases')
let purchaseCounter = 0;
const cookieElement = document.querySelector('#cookie')


//This element is used to store user information obviously

// TODO - IMPLEMENT SAVE FEATURE

const userInformation = {
    shopname:'name',
    money:0,
    moneyPerSecond:0
}



//This element will be used to select the popup
const pop = document.createElement('div')
pop.classList.add('openingPopup');
document.body.appendChild(pop);

const openingPopup = document.querySelector(".openingPopup");
openingPopup.innerHTML =
    `
    <h1>Welcome!</h1>
    <h3>Press anywhere to continue...</h3>
    `
openingPopup.addEventListener("click", () => {
guideThrough();
})


//Guide the user through the game 

function guideThrough(){
    openingPopup.innerHTML =`
    <h1> Have you ever played cookie clicker ? </h1>
    <h2><span class = "openingButton">YES</span><span>/</span><span class = "openingButton">NO</span></h2>
    `
    const buttonChoice = document.querySelectorAll(".openingButton")
    buttonChoice.forEach(button => {
        button.addEventListener("click", e => {
            switch (e.target.textContent) {
                case "YES":
                    openingPopup.classList.remove("openingButton");
                    openingPopup.classList.add("hide");
                    createShopName();
                    break;

                case "NO":

                    openingPopup.classList.add("hide");
                    createShopName();

                    break;
            }
        })
    })
}

function createShopName(){

    const shopname = document.createElement('div');

    shopname.classList.add("shopname");
    document.body.appendChild(shopname);


    const bakeryname = document.querySelector("#bakeryname");
    const shname= document.createElement('input');
    const sidenav = document.querySelector(".sideNav");
    shname.placeholder="Input bakery name..."
    shname.classList.add("shopname");
    shname.maxLength = 24;
    document.body.appendChild(shname);

    shname.addEventListener('keydown', ev => {
            if (ev.key === "Enter") {
                document.body.removeChild(shname);
                sidenav.classList.remove("hide");
                cookie.classList.remove('hide')
                bakeryname.innerHTML= ev.target.value;
                document.body.removeChild(shopname)
                let name = ev.target.value;
                userInformation.shopname = name;
            }
        }
    )
}





// This is the array of purchases

const purchases = [
    {   id:0,
        name: "cursor",
        image:"Images/cursor.png",
        isPurchasable:true,
        count:0,
        clickerPrice:10,
        clickerRevenue:0.25
    }
    ,
     {   id:1,
        name: "Grandma",
        image:"Images/Grandma_new.png",
        isPurchasable:false,
        count:0,
        grandmaPrice:120,
    }
]


// Increase user's money on click, and enlarge the cookie so it looks bigger on click //

cookieElement.addEventListener('click', e =>{
    userInformation.money += 1;
    cookieElement.classList.add('enlarge');
    setInterval(() =>{
      cookieElement.classList.remove('enlarge')  
    }, 300)
    rotate(cookieElement)

})

function rotate(image){
    image.rotate(20*Math.PI/100)
}

function applyEnlargeClass(element){
    setInterval(element.classList.add('enlarge'), 200);
    element.classList.remove('enlarge');
}