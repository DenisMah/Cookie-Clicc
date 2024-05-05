const cookie = document.querySelector("#cookie");
const moneyElement = document.querySelector("#money");
let money = 0;


// Handle the modal and 
const bakeryname = document.querySelector("#bakeryname");
const modal = document.querySelector(".bakerymodal");
const closemodal = document.querySelector("#closemodal");


function updateMoneyElement(){
    moneyElement.innerHTML = `${money}$`;
}
setInterval(updateMoneyElement, 50);

bakeryname.addEventListener('click', () => {
    showModal();
    console.log("cookie")
})


bakeryname.addEventListener('click', () => {
showModal();
console.log("cookie")
})

modal.addEventListener('input', e =>{
    bakeryname.innerHTML = e.target.value;
})

closemodal.addEventListener('click', () => {
    closeModal();
})


cookie.addEventListener("click", e =>{
    console.log("clicked")
    money++;
    moneyElement.innerText = `${money}$`
    cookie.classList.add('enlarge'); // Add the spin class
    setTimeout(() => {
        cookie.classList.remove('enlarge');  // Remove the class after the animation
    }, 300); // Adjust the delay if needed
})

function closeModal(){
    modal.style.display = "none";
}

function showModal(){
    modal.style.display = "flex";
}






