const cookie = document.querySelector("#cookie");
const moneyElement = document.querySelector("#money");
let money = 0;
let grandma = 0;
const upgrade = document.querySelector("#bigupgrade");
const granny = document.querySelector("#granny");

cookie.addEventListener("click", e =>{
    console.log("clicked")

    money++;

    moneyElement.innerText = `Money earned: ${money}$`

    cookie.classList.add('enlarge'); // Add the spin class

    setTimeout(() => {
        cookie.classList.remove('enlarge');  // Remove the class after the animation
    }, 300); // Adjust the delay if needed
})



granny.addEventListener("click", e =>{
    if(money >= 50){
        money = money-50;
        grandma++;
        moneyElement.innerText = `Money earned: ${money}$`
    }
})



function tableUpdate (){
    if (money > 50){
        granny.classList.add('green')
    } else {
        granny.classList.remove('green')
    }
}


function grannyMoney() {
    money+= grandma * 1z;
    moneyElement.innerText = `Money earned: ${money}$`;
}



setInterval(tableUpdate, 1);
setInterval(grannyMoney, 3000);