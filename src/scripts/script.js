// Get the button:
let mybutton = document.getElementById("myBtn");

if (window.location.pathname.includes("projects.html")) {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// mobile menu javascript
const hamburgerButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.link-menu-mobile');
const linkMenuItems = document.querySelectorAll('.link-menu-mobile li a');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.style.right = mobileMenu.style.right === '0%' ? '-50%' : '0%';
});

// Close the menu when clicking outside the navigation bar
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = mobileMenu.contains(event.target) || hamburgerButton.contains(event.target);
    if (!isClickInsideNavbar) {
        mobileMenu.style.right = '-50%';
    }
});

// Close the menu when clicking on one of the links
linkMenuItems.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.style.right = '-50%';
    });
});

