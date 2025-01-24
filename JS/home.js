// Show the popup when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


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
const sectionCont = document.querySelectorAll('.sectioncont');
const Numrouting = document.querySelectorAll('.numrouting');
const articleOne = document.querySelectorAll('.articleone');
const Sectiontwo = document.querySelectorAll('.sectiontwo');
const Articletwo = document.querySelectorAll('.articletwo');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {

    containerOne.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slide-in');
        }
    })
    sectionCont.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slideFromTop');
        }
    })
    Numrouting.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slideInForNumRouting');
        }
    })
    articleOne.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slideInForArticleOne');
        }
    })
    Sectiontwo.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSectionTwo');
        }
    })
    Articletwo.forEach(function(cont){
        if (isInViewport(cont)) {
            cont.classList.add('slideInForArticleTwo');
        }
    })
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
