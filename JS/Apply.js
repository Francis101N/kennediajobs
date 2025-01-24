// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select Elements
const firstSection = document.querySelectorAll('.firstSection');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    firstSection.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForFirstSection');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
