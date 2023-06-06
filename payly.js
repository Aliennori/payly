const accordions = document.querySelectorAll('.accordion-item');

for (let i=0; i<accordions.length; i++ ){
    accordions[i].addEventListener('click', function(e) {
        this.classList.toggle('active');  
        const accordionContent = this.querySelector('.accordion-content');
        accordionContent.classList.toggle('active');
        const accordionHeading = this.querySelector('.accordion-heading');
        accordionHeading.classList.toggle('active');
              
  });
}
document.addEventListener("DOMContentLoaded", function() {
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const sideNav = document.querySelector('.sidenav ul');
const closebtn = document.querySelector('.close');

hamburger.addEventListener('click', (e) => {
  mobileNav.classList.toggle('active');
  sideNav.classList.toggle('active') ;
  sideNav.style.visibility = mobileNav.classList.contains('active') ? 'visible' : 'hidden';
   
});

closebtn.addEventListener('click', (e) => {
  mobileNav.classList.remove('active');
  sideNav.classList.remove('active');
  
});  
})
