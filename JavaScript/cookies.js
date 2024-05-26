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
                itemmodal.classList.add('product-modal');

                itemmodal.innerHTML = `
                <h4>${item.name}</h4>
                `
                document.body.append(itemmodal);
            })
        })
    })
})