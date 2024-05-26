

//Create items from JSON array, and add an event listener for each item where on click they'll show a modal consisting of cookies information, as well as provide the user to buy items. 
//
$(document).ready(function(){
    $.getJSON('JSON/cookies-items.json', function(data){
        
        data.forEach((item) =>{
            const items = document.createElement('div');
            items.classList.add('cookie');
            items.innerHTML = `
            <img src = ${item.image}>
            <h4> ${item.name}</h4>
            <p> ${item.price}</p>
            `
            $('#cookies').append(items);

            items.addEventListener('click' , ev =>{
                const itemmodal = document.createElement('div');
                itemmodal.classList.add('bigModal');

                itemmodal.innerHTML = `
                    <div class = "cookie-modal-image">
                        <img src = "${item.image}">
                    </div>

          
                    <div class = "cookie-modal-description">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                        <div class = "cookie-purchase">
                        <p>Choose amount of cookie boxes </p>
                        <input type = "number" min = "1" max = "10" value = "1">
                        </div>
                     </div>
                `
                document.body.append(itemmodal);
            })
        })
    })
})