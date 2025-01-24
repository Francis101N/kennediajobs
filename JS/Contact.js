// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select Elements
const contactUsDetails = document.querySelectorAll('.contactdetails');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    contactUsDetails.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContactDetails');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
