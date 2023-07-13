
// ..........for welcome effect ...,,,,,,,,,,,

document.addEventListener('DOMContentLoaded', function() {
    var welcome = document.getElementById('welcome');
    setTimeout(function() {
      welcome.style.opacity = '0';
      setTimeout(function() {
        welcome.style.display = 'none';
      }, 1000); // Adjust the duration as needed
    }, 3000); // Adjust the duration as needed
  });

// ,,,,,,,,,,,,,,for no data Copy'''''''''''''''

  document.addEventListener('contextmenu', function(event) {
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

        document.addEventListener('click', function(event) {
          var menu = document.querySelector('.navbar .menu');
          var menuBtn = document.querySelector('.navbar .menu-btn');
          var targetElement = event.target;
      
          // Check if the clicked element is outside of the menu or the menu button
          if (!menu.contains(targetElement) && !menuBtn.contains(targetElement)) {
            menu.classList.remove('active');
          }
        });
      
        // Toggle the active class for the menu on menu button click
        var menuBtn = document.querySelector('.navbar .menu-btn');
        menuBtn.addEventListener('click', function() {
          var menu = document.querySelector('.navbar .menu');
          menu.classList.toggle('active');
        });
      

      //   $('.menu-btn').click(function(){
      //     $('.navbar .menu').toggleClass("active");
      //     $('.menu-btn i').toggleClass("active");
      // });



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

    
    
 
    
    
