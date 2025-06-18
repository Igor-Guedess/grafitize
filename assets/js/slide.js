var radio = document.querySelector('.manual-btn');
var count = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    nextSlide();
}, 51000000);

function nextSlide() {
    count++;
    if (count > 2) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}