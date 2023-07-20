
// ..........for welcome effect ...,,,,,,,,,,,

document.addEventListener('DOMContentLoaded', function () {
  var welcome = document.getElementById('welcome');
  setTimeout(function () {
    welcome.style.opacity = '0';
    setTimeout(function () {
      welcome.style.display = 'none';
    }, 1000); // Adjust the duration as needed
  }, 3000); // Adjust the duration as needed
});

// ,,,,,,,,,,,,,,for no data Copy'''''''''''''''

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

//   .....................navbar color ......
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


// Toggle the active class for the menu on menu button click
const menuBtn = document.querySelector('.navbar .menu-btn');
menuBtn.addEventListener('click', function () {
  const menu = document.querySelector('.navbar .menu');
  menu.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('active');
});

// Add event listeners to each menu item to remove the menu after a selection is made
const menuItems = document.querySelectorAll('.navbar .menu li a');
menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.remove('active');
    menuBtn.querySelector('i').classList.remove('active');
  });
});


// owl carousel script
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }

});






