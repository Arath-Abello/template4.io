const menu = document.querySelector('.nav_menu');
const enlaces =document.querySelector('.nav_link');
menu.addEventListener('click', ()=>{
    setTimeout(()=>{
        enlaces.classList.toggle('show');
    }, 250);
});