function scrollTo(element) {
    window.scroll({       
        left: 0,
        top: element.offsetTop, 
        behavior: 'smooth'
    });
}

let button = document.querySelector('.button'),
    buttonButom = document.querySelector('.button_butom'),
    section = document.querySelector('.section'),
    footer = document.querySelector('#footer');
     
button.addEventListener('click', () => {
    console.log('клик');
    scrollTo(footer);
});
buttonButom.addEventListener('click', () => {
    scrollTo(section);
});