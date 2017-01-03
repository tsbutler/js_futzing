var para = document.querySelector('p');
var style = document.querySelector('style');

para.addEventListener('click', updateName);

para.addEventListener('click', updateStyle)

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

function updateStyle() {
  var color = prompt("red, blue, or yellow?");
  style.textContent = 'p {color: black; background:' + color + '}';
}