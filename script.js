const cookie = document.querySelector("#cookie");
const money

cookie.addEventListener("click", e =>{
    console.log("clicked")



    cookie.classList.add('enlarge'); // Add the spin class

    setTimeout(() => {
        cookie.classList.remove('enlarge');  // Remove the class after the animation
    }, 500); // Adjust the delay if needed
})