const clickbtn = document.querySelectorAll(".header-content  a");
const alllinks = document.querySelectorAll(".navbar-nav li a");
function scrollToTarget(elements) {
    
    elements.forEach(element => {
        
        element.addEventListener("click", (e) => {
            
            e.preventDefault();
            
            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: 'smooth'
      }); 
            
   }); 
        
});  
    
}
scrollToTarget(clickbtn);
scrollToTarget(alllinks);

AOS.init({
    duration: 1200,
  })



