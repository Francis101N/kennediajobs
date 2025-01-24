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
const containerThree = document.querySelectorAll('.contthree');
const containerFour = document.querySelectorAll('.contfour');


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

    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
