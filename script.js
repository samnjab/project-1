const menuBtn = document.querySelector('.menu-btn');
const menuScreen = document.querySelector('.menu-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuBtn.classList.toggle('closed');

    menuScreen.classList.toggle('open');
    menuScreen.classList.toggle('closed');
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

const formElement = document.querySelector('form');
const resultDiv = document.querySelector('.result')
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const pElement = document.createElement('p');
    pElement.textContent = "Posted!"
    resultDiv.appendChild(pElement);
    pElement.classList.add('message');
})
