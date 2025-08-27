const clickbtn = document.querySelectorAll('.clickbtn');

clickbtn.forEach((element) => {
    element.addEventListener('click', () => {
        console.log('Hello world');
        console.log('Hello world 12345');
    });
});
