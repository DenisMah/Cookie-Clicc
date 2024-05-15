
// <-----------------------------------------------------------> //
// Handle money and updating the money dynamically//
const moneyPerSecond = document.querySelector('#persec');
const moneyElement = document.querySelector("#money");

let money = 0;

function updateMoney(){
    let totalMoney = grandmacount * 1 + clickerCount * 0.25;
    moneyElement.innerHTML = `${money}$`
    moneyPerSecond.innerHTML = `Per second: ${totalMoney}$`
}
setInterval(updateMoney, 1000);


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
cookie.addEventListener("click", e =>{
    money++;
    moneyElement.innerText = `${money}$`
    cookie.classList.add('enlarge');
    setTimeout(() => {
        cookie.classList.remove('enlarge');
    }, 300);
})
// <-----------------------------------------------------------> //
const cursorinfo = document.querySelector("#cursorinfo");
let clickerCount = 0;
const clickerBasePrice = 10;
let dynamicClickerPrice = clickerBasePrice + (clickerBasePrice * clickerCount);
// Purchase clicker and handle clicker upgrades
const clicker = document.querySelector('#clicker');
clicker.addEventListener('click', e =>{
    if (money > dynamicClickerPrice){
        clickerCount++;
        money = money - dynamicClickerPrice;
    }
})


clicker.addEventListener('mouseenter', e =>{

})

function clickerMoney(){
    money+=0.25*clickerCount;
}
setInterval(clickerMoney,1000);

function updateClickerPrice(){
    dynamicClickerPrice = clickerBasePrice + (clickerBasePrice * clickerCount) * 0.25;
    cursorinfo.innerHTML = `
    <p> Clicker -</p>
    <p class="price">${dynamicClickerPrice}$</p>
  `
}
setInterval(updateClickerPrice,1000);

// <-----------------------------------------------------------> //
// Purchase grandma and handle grandma upgrades //
let grandmacount = 0;
const granny = document.querySelector("#granny");
const grandmaBasePrice = 50;
let dynamicGrandmaPrice = grandmaBasePrice + (grandmaBasePrice * grandmacount);
let grandmaprice = document.querySelector("#grandmainfo");


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
    grandmaprice.innerHTML = `
    <p> Grandma -</p> 
    <p class = "price">${dynamicGrandmaPrice}$ </p>`;
}
setInterval(updateGrandmaPrice,1000);
// <-----------------------------------------------------------> //






