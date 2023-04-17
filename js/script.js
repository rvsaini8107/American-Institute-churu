console.log("Har Har Mahadev")




// ===========================toggle icon navbar=============================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}; 

 
// ===========================scroll=============================
let sections  =  document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
// console.log(sections )
// console.log(navlinks)

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top>=offset && top <offset + height ){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        }
    });

    // =================sticky navbar ===============
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

    // ===========================remove toggle icon navbar and when chick navbar link (scroll)=============================
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove('active');
};

// scroll reveal=====================

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content,.heading', { origin:"top" });
 ScrollReveal().reveal('.home-img,.services-container,.event-box,.contact form', { origin:"bottom" });
 ScrollReveal().reveal('.about-img,.footer-text,h1,h3', { origin:"left" });
 ScrollReveal().reveal('.about-content,p,.footer-iconTop', { origin:"right" });
    
//  auto type word =================
var typed = new Typed('#multiple-text', {
    strings: [ 'Your Brother','a English Spoken Teacher'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop:true
  });



// mail contact form

// function validateForm() {
//     var x = document.forms["myForm"]["name"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// 	var y = document.forms["myForm"]["phone"].value;
//     if (y == "") {
//         alert("Phone must be filled out");
//         return false;
//     }
// 	var z = document.forms["myForm"]["email"].value;
//     if (z == "") {
//         alert("Email must be filled out");
//         return false;
//     }
// 	var a = document.forms["myForm"]["subject"].value;
//     if (a == "") {
//         alert("Subject must be filled out");
//         return false;
//     }
// 	var b = document.forms["myForm"]["message"].value;
//     if (b == "") {
//         alert("Message must be filled out");
//         return false;
//     }
//     console.log("full check ")
// 	alert("Message sent successfully!");  //show message send successfull or not on submit button 

// 	//send form details to my gmail 

// 	var name = document.getElementById('name').value;  //get full name 
// 	var phone = document.getElementById('phone').value; //get phone 
// 	var email = document.getElementById('email').value; //get email address 
// 	var subject = document.getElementById('subject').value; //get email subject 
// 	var message = document.getElementById('message').value; //get textarea you message 

// 	//send form details to my gmail 

// 	window.location.href = "mailto:rvsaini8107@gmail.com?subject=" + subject + "&body=" + message + "%0D%0A%0D%0AFrom: " + name + "%0D%0APhone: " + phone + "%0D%0AEmail: " + email;  

// 	return false;   //prevent page from refreshing 

//      } 