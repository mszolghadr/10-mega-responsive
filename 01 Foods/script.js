const icons = document.querySelectorAll('.section1-icons i');
let index = 1;

setInterval(() => {
    index++;

    const icon = document.querySelector('.section1-icons i.change');
    icon.classList.remove('change');

    if (index > icons.length) {
        icons[0].classList.add('change');
        index = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }

}, 3000)