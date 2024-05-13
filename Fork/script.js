const cookie = document.querySelector('.main');
const purchaseDiv = document.querySelector('.purchases')
let purchaseCounter = 0;

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
            }
        }
    )
}



// This is the array of purchases



const purchases = [
    {
        id:0,
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
        grandmaRevenue:1.5},
    {
        id:2,
        name: "Grandma",
        image:"Images/Grandma_new.png",
        isPurchasable:false,
        count:0
    }

]


function loadNextPurchasableItem(purchasableItem) {
    if(purchasableItem.isPurchasable === true){
        return true;
    } else {
        return false;
    }
}


function loadPurchasases(){
    for(let index = 0; index < purchases.length; index++) {
        if(purchases[index].isPurchasable === true){
            const bb = document.createElement('div');
            bb.innerHTML = purchases[index].name;
            purchaseDiv.appendChild(bb);
            console.log(purchases[index]);
            purchases[index+1].isPurchasable =true;
        }
    }
}



loadPurchasases();

