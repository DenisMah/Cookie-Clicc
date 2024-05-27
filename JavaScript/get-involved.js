$(document).ready(function(){
    $.getJSON('JSON/people.json', function(data){
        data.forEach(element => {
            const person = document.createElement('div');
            $(person).addClass('person');
            person.innerHTML = `
            <p id = "element-name">${element.name}</p>
            <img src = ${element.image}>
            <p> " ${element.description}"</p>
            `

            $('#our-people').append(person)
        });
    })
})