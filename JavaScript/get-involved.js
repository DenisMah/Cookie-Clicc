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


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('get-to-know-us');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    // Wrap each letter in a span
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        textElement.appendChild(span);
    }

    function animateText() {
        const spans = textElement.querySelectorAll('span');
        let index = 0;

        function changeLetter() {
            if (index < spans.length) {
                const currentSpan = spans[index];

                // Apply the style changes
                currentSpan.style.color = 'orange';

                // Revert the style changes after 1 second
                setTimeout(() => {
                    currentSpan.style.fontSize = '';
                    currentSpan.style.color = '';
                }, 1000);

                index++;
                setTimeout(changeLetter, 100); 
            }
        }

        changeLetter();
    }

    animateText();
});


let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});