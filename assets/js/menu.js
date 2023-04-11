const menu = document.querySelector('.nav_menu');
const enlaces =document.querySelector('.nav_link');
menu.addEventListener('click', ()=>{
    
        enlaces.classList.toggle('active');
    
});