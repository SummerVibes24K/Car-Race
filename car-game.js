let bottom = 10;
left = 50;

window.addEventListener('keydown', function (event) {

    // console.log(event.key);
    if (event.key === 'ArrowLeft' && left > 0) {
        left = left - 3;
    } else if (event.key === 'ArrowRight' && left < 100) {
        left = left + 3;

    } else if (event.key === 'ArrowUp' && bottom < 90) {
        bottom = bottom + 3;

    } else if (event.key === 'ArrowDown' && bottom > 0) {
        bottom = bottom - 3;
    }
    document.getElementById('my-car').style.left = left + '%';
    document.getElementById('my-car').style.bottom = bottom + '%';


});


document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('white-car').style.animation = 'white-car-animation 5s linear infinite';

    document.getElementById('road').style.animation = 'road-animation 3s linear infinite';
})

setInterval(function () {
    let myCarLeft = document.getElementById('my-car').getBoundingClientRect().left;
    console.log(myCarLeft);
    if (myCarLeft < 280 || myCarLeft > 933) {
        alert('Game Over. You crashed! Reload to play again.');
    }
}, 100);