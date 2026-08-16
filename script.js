
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