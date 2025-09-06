let tl = gsap.timeline();

tl.from("#mobilescreen", {
  x: "100%",
  duration: 0.58,
  opacity: 0,
  delay: 1,
});
tl.from("#mobilescreen img", {
  y: 50,
  opacity: 0,
  duration: 0.38,
});
tl.from("#mobilescreen ul li", {
  y: 50,
  opacity: 0,
  duration: 0.35,
  stagger: 0.4,
});
tl.from("#mobilescreen i ", {
  rotate: -270,
  opacity: 0,
  duration: 0.35,
  stagger: 0.4,
});
tl.pause();
let closemobilescreen = document.querySelector("#mobilescreen");
let closeBtn = document.querySelector("#mobilescreen i");
let menuItems = document.querySelectorAll("#mobilescreen ul a");

// Add click handlers to menu items to close menu when clicked
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        closeMobileMenu();
    });
});

// Open menu handler
document.querySelector("nav > #menu").addEventListener("click", function () {
    closemobilescreen.style.display = "flex";
    tl.play();
});

// Close menu handler
closeBtn.addEventListener("click", closeMobileMenu);

// Function to handle closing the mobile menu
function closeMobileMenu() {
    tl.reverse();
    // Hide the menu after animation completes
    setTimeout(() => {
        closemobilescreen.style.display = "none";
        tl.pause();
        tl.progress(0);
    }, tl.duration() * 100);
}

