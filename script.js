const hiddenElements = document.querySelectorAll(".fade-in, .horse-reveal");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

});