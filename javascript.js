var para = document.querySelector('p');
var style = document.querySelector('style');
var font  = document.querySelector('style #font');

para.addEventListener('click', updateName);

para.addEventListener('click', updateStyle);

para.addEventListener('click', updateFont);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

function updateStyle() {
  var color = prompt("red, blue, or yellow?");
  style.textContent = 'p {color: black; background:' + color + '}';
}

function updateFont() {
  var font = prompt("like the font?")
  if (font != "yes") {
    font.textContent = 'p {font: monotype;}';
  }
}