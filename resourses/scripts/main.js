function lightDarkFunction() {
    const element = document.body;
    element.classList.toggle("light-mode");
 }

 const readMoreButton = document.querySelector('.readMoreButton');
 const text = document.querySelector('.text');

 readMoreButton.addEventListener('click', (e) => {
    text.classList.toggle('showMore');
    if (readMoreButton.innerText === 'Read More') {
        readMoreButton.innerText = 'Read Less';
    } else {
        readMoreButton.innerText = 'Read More';
    }
 });