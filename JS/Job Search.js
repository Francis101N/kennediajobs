// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select Elements
const containerOne = document.querySelectorAll('.contone');
const containerTwo = document.querySelectorAll('.conttwo');
const containerThree = document.querySelectorAll('.contthreee');
const containerFour = document.querySelectorAll('.contfour');
const sectionTwoImageCont = document.querySelectorAll('.sectwoimgcont');
const sectionTwoText = document.querySelectorAll('.sectwotext');


// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    containerOne.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slide-in');
        }
    });
    containerTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContTwo');
        }
    });
    containerThree.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContThree');
        }
    });
    containerFour.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContFour');
        }
    });
    sectionTwoImageCont.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForsectwoimgcont');
        }
    });
    sectionTwoText.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInFoSecTwoText');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
