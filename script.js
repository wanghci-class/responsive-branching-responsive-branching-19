// script.js
// Attach click handlers to the three nav links to toggle theme overrides.
document.addEventListener('DOMContentLoaded', function () {
    // Find the nav links (assume the first three anchors in .main-nav)
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    const links = nav.querySelectorAll('a');
    // Defensive: ensure we have at least 3 links
    if (links.length < 3) return;

    const [osDefaultLink, darkLink, lightLink] = links;

    osDefaultLink.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.body.classList.remove('dark', 'light');
    });

    darkLink.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    });

    lightLink.addEventListener('click', function (ev) {
        ev.preventDefault();
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    });
});
