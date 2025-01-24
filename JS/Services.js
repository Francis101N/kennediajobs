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
const contTwo = document.querySelectorAll('.conttwo');
const contThree = document.querySelectorAll('.contthree');
const Article = document.querySelectorAll('article');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    contOne.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('contOneSlideIn');
        }
    });
    contTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('contTwoSlideIn');
        }
    });
    contThree.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('contThreeSlideIn');
        }
    });
    Article.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('articleSlideIn');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
