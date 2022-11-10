/* ---------------- PAGE REFRESH TO TOP ---------------- */

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

/* ---------------- NAVBAR SCROLLSPY ---------------- */

let section = document.querySelectorAll('section'); // get all <section> elements

let navLinks = document.querySelectorAll('nav ul a') // get all <a> inside <ul> inside #navbar element

let sectionHeight = document.querySelector('section').offsetHeight; // get height of top section

let sectionStartingPointArray = []; // array to store the top-most pixel points of each <section>

let navLinksArray = []; // array to store the nav elements

// for every <section> element we store their top-most pixel point into an array
section.forEach((sec) => { sectionStartingPointArray.push(sec.offsetTop); });

// for every nav link element we store them in an array 
navLinks.forEach((navLink) => { navLinksArray.push(navLink); });

// call this function on loading the webpage
window.onload = () => {
    navLinksArray[0].classList.add('active');
}

// call this function everytime we scroll on the browser window
window.onscroll = () => {
    // amount of pixels we have scrolled downwards from the top-most point of the web page
    let downwardScroll = window.scrollY;
    // for every <section>'s top-most point
    sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
        // check if the current downward scroll is on the middle of each <section>
        // by using its top-most point minus its height divide by half
        if (downwardScroll >= sectionStart - sectionHeight / 2) {
            //if so, we remove all the 'active' classes on all nav links
            navLinksArray.forEach((nav) => { nav.classList.remove('active'); });
            //then add the 'active' class on the corresponding nav depending on which section the scroll is currently at
            navLinksArray[sectionIndex].classList.add('active');
        }
    });
}

/* ---------------- CONTACT FORM SUBMISSION ---------------- */