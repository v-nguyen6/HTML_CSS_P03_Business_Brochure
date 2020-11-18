
//      author: mina, vinson, olivia
//		date: 2020-11-13
//	    title: keep it cheesy - menu js

// mobile button menu

const body = document.body;
const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});
function mobileMenu(x) {
  x.classList.toggle("change");
}

// get the button
mybutton = document.getElementById("topBtn");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


/*
---------------------------------------------------------------------------------------------------------------
----------------
Navigation Bar JS 
----------------
---------------------------------------------------------------------------------------------------------------
*/
var cursor = true;
    var speed = 500;
    setInterval(() => {

        if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
        }

        else {
        document.getElementById('cursor').style.opacity = 2;
        cursor = true;
        }

        },speed);


const menuIcon = document.querySelector('.hamburger-menu')

const navBar = document.querySelector('.navbar')
const navBarLinks = navBar.querySelectorAll('a')



menuIcon.addEventListener('click', _ => {
    navBar.classList.toggle('change');
    document.body.classList.toggle('open')
});

navBarLinks.forEach(link => {
    link.addEventListener('click', _ => { 

        document.body.classList.remove('open')
        navBar.classList.remove('change')
    })
})


/*
---------------------------------------------------------------------------------------------------------------
----------------
Placeholder Text.......(Used to seperate our pages/classes)
----------------
---------------------------------------------------------------------------------------------------------------
*/