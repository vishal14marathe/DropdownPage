'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isOpen = answer.style.display === 'block';

        faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none'); // Close all

        if (!isOpen) {
            answer.style.display = 'block'; // Open clicked
        }
    });
});





// Function to toggle main section visibility
function toggleSection(sectionId) {
  var sectionContent = document.getElementById(sectionId);
  
  if (sectionContent.style.display === "block") {
      sectionContent.style.display = "none";
  } else {
      sectionContent.style.display = "block";
  }
}

// Function to toggle video sub-section visibility
function toggleSubSection(subSectionId) {
  var subSectionContent = document.getElementById(subSectionId);
  
  if (subSectionContent.style.display === "block") {
      subSectionContent.style.display = "none";
  } else {
      subSectionContent.style.display = "block";
  }
}
