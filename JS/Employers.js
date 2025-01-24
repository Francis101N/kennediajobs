// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select all h2 and img elements
const contOne = document.querySelectorAll('.contone');
const sectionThree = document.querySelectorAll('.sec3art');
const articleTwo = document.querySelectorAll('.articletwo');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    contOne.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slide-in');
        }
    });
    sectionThree.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSectionThree');
        }
    });
    articleTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('articleTwoSlideIn');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
