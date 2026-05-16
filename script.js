document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for your inquiry. Élan Equestrian will contact you soon.");

});


const hiddenElements = document.querySelectorAll(".fade-in, .horse-reveal");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

});