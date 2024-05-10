//First we will open the modal so the user gets familiar with the game //

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



const cookie = document.querySelector('.main');




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
<<<<<<< HEAD



=======
                    openingPopup.classList.add("hide");
                    createShopName();

                    break;
>>>>>>> 28dfa50 (Making graphical improvements)
            }
        })
    })
}

function createShopName(){
<<<<<<< HEAD
    const shopname = document.createElement('div');
    shopname.innerHTML =
        `
        <h5>Enter shop name</h5>
        <input type="text">
        `
    shopname.classList.add("shopname");
    document.body.appendChild(shopname);
}
=======
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
            }
        }
    )
}
>>>>>>> 28dfa50 (Making graphical improvements)
