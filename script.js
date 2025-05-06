document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle-form");
    const form = document.getElementById("consultation-form");

    toggle.addEventListener("click", function () {
        form.classList.toggle("open");
        toggle.classList.toggle("disabled", form.classList.contains("open"));
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});