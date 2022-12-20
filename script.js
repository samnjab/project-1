const menuBtn = document.querySelector('.menu-btn');
const menuScreen = document.querySelector('.nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuBtn.classList.toggle('closed');
    // if (!menuOpen){
    //     menuBtn.classList.add('open');
    //     menuBtn.classList.remove('closed')
    //     menuScreen.classList.add('open');
    //     menuOpen = true;
    // }
    // else{
    //     menuBtn.classList.remove('open');
    //     menuBtn.classList.add('closed')
    //     menuScreen.classList.remove('open');
    //     menuOpen:false;
    // }
});