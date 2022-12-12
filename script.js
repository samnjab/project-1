const menuBtn = document.querySelector('.menu-btn');
const menuScreen = document.querySelector('.nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuScreen.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuScreen.classList.remove('open');
        menuOpen:false;
    }
});