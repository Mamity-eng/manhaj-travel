let signupBtn = document.querySelector(".signup");

function signUp() {
  window.location.href = "/loginandSignup/signup.html";
}


const copyrightText = document.querySelector(".copyright small");

if (copyrightText) {
    copyrightText.textContent =
        "Copyright © " +
        new Date().getFullYear() +
        " Manhaj. All rights reserved.";
}


/* 4. SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* 5. SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    ".who-grid, .purpose-card, .benefit, .travel-image-wrap, .cta-content"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
}
