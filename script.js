function changeColor(color){
  let x = document.getElementsByTagName('BODY')[0];
  x.style.backgroundColor = color
  localStorage.setItem('backgroundColor', color);
}

function loadColor() {
    const color = localStorage.getItem('backgroundColor');

    if (color) {
        document.body.style.backgroundColor = color;
    }
}

window.onload = loadColor;


const music = document.getElementById('background-music');


function toggleMusic() {

    const music = document.getElementById('background-music');
    const status = document.getElementById('music-status');

    if (music.paused) {
        music.play();
        status.textContent = 'playing';
    } else {
        music.pause();
        status.textContent = 'paused';
    }
}

/*

const savedTime = localStorage.getItem('musicTime');

if (savedTime) {
    music.currentTime = savedTime;
}

music.addEventListener('timeupdate', () => {
    localStorage.setItem('musicTime', music.currentTime);
});

if (localStorage.getItem('musicPlaying') == 'true') {
    music.play().catch(() => {});
}

*/