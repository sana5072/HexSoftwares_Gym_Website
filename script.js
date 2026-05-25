console.log("JavaScript Working");
// Scroll Reveal Animations

ScrollReveal().reveal('.hero-text', {
    distance: '50px',
    duration: 1000,
    origin: 'bottom'
});

ScrollReveal().reveal('.about-text', {
    distance: '50px',
    duration: 1000,
    origin: 'left'
});

ScrollReveal().reveal('.card', {
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.plan-card', {
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.trainer-card', {
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});


// BMI Calculator

function calculateBMI(){

    let height = document.getElementById("height").value;

    let weight = document.getElementById("weight").value;

    let bmi = weight / ((height / 100) * (height / 100));

    bmi = bmi.toFixed(1);

    if(bmi < 18.5){

        document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (Underweight)";

    }

    else if(bmi >= 18.5 && bmi < 25){

        document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (Healthy)";

    }

    else if(bmi >= 25 && bmi < 30){

        document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (Overweight)";

    }

    else{

        document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (Obese)";

    }

}


// Counter Animation

window.addEventListener("load", () => {

    let counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

        let target = +counter.getAttribute('data-target');

        let count = 0;

        let updateCounter = () => {

            if(count < target){

                count++;

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            }

            else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

});

let themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = function(){

    document.body.classList.toggle("light-mode");

}

let text = "Transform Your Body";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}


window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    }, 1000);

});
setTimeout(typeText, 1000);

window.addEventListener("DOMContentLoaded", () => {

    let cursorGlow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    });

});

let music = document.getElementById("gym-music");

let musicToggle = document.getElementById("music-toggle");

let isPlaying = false;

musicToggle.onclick = function(){

    if(!isPlaying){

        music.play();

        musicToggle.innerHTML = "⏸️";

        isPlaying = true;

    }

    else{

        music.pause();

        musicToggle.innerHTML = "🎵";

        isPlaying = false;

    }

}

let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("success-message").innerHTML =
    "Message Sent Successfully!";

    contactForm.reset();

});