
// <-----------------------------------------------------------> //
// Handle money and updating the money dynamically//
let money = 0;

function updateMoney(){
    let totalMoney = 1*grandmacount;
    moneyPerSecond.innerHTML = `Per second: ${totalMoney}`;
    moneyElement.innerHTML = `${money}$`;
}
setInterval(updateMoney,1000);

const moneyPerSecond = document.querySelector('.persec');


// <-----------------------------------------------------------> //
// Handle the modal and allow bakery name change //
const openmodal = document.querySelector("#bakeryname");
const modal = document.querySelector(".bakerymodal");
const closemodal = document.querySelector("#closemodal");

modal.addEventListener('input', e =>{
    bakeryname.innerHTML = e.target.value;
})
closemodal.addEventListener('click', () => {
    closeModal();
})
openmodal.addEventListener('click', () => {
    showModal();
})
function closeModal(){
    modal.style.display = "none";
}
function showModal(){
    modal.style.display = "flex";
}
// <-----------------------------------------------------------> //

//Cookie clicking functionality & incrementing money each time you click on the cookie//
const cookie = document.querySelector("#cookie");
const moneyElement = document.querySelector("#money");

cookie.addEventListener("click", e =>{
    console.log("clicked")
    money++;
    moneyElement.innerText = `${money}$`
    cookie.classList.add('enlarge');
    setTimeout(() => {
        cookie.classList.remove('enlarge');
    }, 300);
})
// <-----------------------------------------------------------> //

// Purchase grandma and handle grandma upgrades //
let grandmacount = 0;
const granny = document.querySelector("#granny");
const grandmaBasePrice = 50;
let dynamicGrandmaPrice = grandmaBasePrice + (grandmaBasePrice * grandmacount);
let grandmaprice = document.querySelector("#grandmaprice");


granny.addEventListener("click", e =>{
    if (money >= dynamicGrandmaPrice){
        grandmacount++;
        money= money - dynamicGrandmaPrice;
    }
});
function grandmaMoney(){
    money+= 1*grandmacount;
}
setInterval(grandmaMoney, 1000);

function updateGrandmaPrice(){
    dynamicGrandmaPrice = grandmaBasePrice + (grandmaBasePrice * grandmacount) * 0.25;
    grandmaprice.innerText = `Grandma - ${dynamicGrandmaPrice}$`;
}
setInterval(updateGrandmaPrice,1000);





