/*
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
let gradients = [
    "linear-gradient(to right top,#d3959b , #bfe6ba)",
    "linear-gradient(to right top,#EF629F ,#EECDA3)",
    "linear-gradient(to right top,#c9ffbf ,#ffafbd"
];*/

/*  // -IntersectionObserver code for responsive nav bubble. (didn't work)
const options = {
    threshold: 0.8
};
//  -IntersectionObserver code for responsive nav bubble.
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        let gradientIndex = entry.target.getAttribute('data-index');
        let coords = activeAnchor.getBoundingClientRect();
        let directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
        }
    });
}
sections.forEach(section => {
    observer.observe(section);
});*/

/*  // -addEventListener code for the nav (didnt work)
let li = document.querySelector(`li a`);
let nav = document.getElementsByTagName(`nav`);

let home = document.querySelector(".a-home");
let members = document.querySelector('.a-members');
let about = document.querySelector('.a-about');
let h1 = document.querySelector(".h1");

function navCheck() {
    if (!this === home) {
        home.style.backgroundColor = "#e5767f";
    } if (!this === members) {
        members.style.backgroundColor = "Black";
    } if (!this === about) {
        about.innerHTML = "backgroundColor: #c9ffbf";
        about.style.color = "Black";
    } else {
    };
}
window.addEventListener(`scroll`, navCheck);

navCheck();

const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.6
};
let observer = new IntersectionObserver(navCheck, options);
let home = document.querySelector(".a-home");
let members = document.querySelector('.a-members');
let about = document.querySelector('.a-about');
let h1 = document.querySelector(".h1");
/*
let y = window.scrollY;
function getPosition(target) {
    if (window.scrollY) {
        window.scroll(0, 0);  // reset the scroll position to the top left of the document.
      }
      
      window.scrollByPages(1);
}
*/
/*

function navCheck(entries) {
    entries.forEach(entry => {
        //---------------
        
        //---------------
        const className = entry.target.className;
        //const classNameVal = getAttribute(`${className}`);
        const gradientIndex = entry.target.getAttribute('data-index');
        //------------------------
//      let scrollVal = scrollY.className === className.value;

        // const target = $(className).children().hash;
        
        if (scrollY.scrollVal === className[home]) {
            home.style.backgroundColor = "#e5767f";
        } else {
            members.style.backgroundColor = "none";
        }
        console.log();
    });
}
sections.forEach(section => {
    observer.observe(section);
});
*/