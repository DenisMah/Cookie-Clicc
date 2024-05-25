$(document).ready(function(){
    $.getJSON('JavaScript/items.json', function(data){
        
        data.forEach((item) =>{
            const items = document.createElement('div');
            items.classList.add('cookie');
            items.innerHTML = `
            <img src = ${item.image}>
            <p> ${item.name}</p>
            <h1> ${item.price}</h1>
            `
            $('#cookies').append(items);


            items.addEventListener('click' , ev =>{
                const itemmodal = document.createElement('div');

                itemmodal.classList.add('product-modal');

                itemmodal.innerHTML = `
                <h1>${item.name}</h1>
                `
                document.body.append(itemmodal);
            })
        })

    
    })
})