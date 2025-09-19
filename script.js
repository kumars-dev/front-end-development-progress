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
menuItems.forEach((item) => {
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

// smooth scrolling use lenis

const vertical_selector = document.querySelector(".gallery-container");
const leftcolumn = document.querySelector(".leftbox");
const rightcolumn = document.querySelector(".rightbox");
const images = gsap.utils.toArray(".gallery-item img");
gsap
  .timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: "#gallery",
      start: "top top",
      end: `+=${images.length * 50}`,
      scrub: 2,
      invaliddateOnRefresh: true,
  //      markers:{
  //   fontSize:"20px"
  // },
    },
  })
  .to(leftcolumn, {
    y: () => -(leftcolumn.offsetHeight - vertical_selector.offsetHeight),
  })
  .fromTo(
    rightcolumn,
    {
      y: () => vertical_selector.offsetHeight - rightcolumn.offsetHeight,
    },
    { y: 0 },
    "<"
  );
ScrollTrigger.create({
  trigger: "#gallery",
  start: "top top",
  end: `+=${images.length * 40}`,
  invaliddateOnRefresh: true,
  pin:true,
  // markers:{
  //   fontSize:"20px"
  // }
});
let blank_space = document.querySelector('.blank-section')
const styleobject ={
  border:"1px solid red",
  height:"60vh",
  background:"#1c5b7bb9"
}

// blank_space.style.border = styleobject.border;
blank_space.style.height = styleobject.height;
blank_space.style.background = styleobject.background;
