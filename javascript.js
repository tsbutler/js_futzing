var para = document.querySelector('p');
var style = document.querySelector('style');
var font  = document.querySelector('style.test');
var grow = document.querySelector('style.grow');

para.addEventListener('click', updateName);

para.addEventListener('click', updateStyle);

para.addEventListener('click', updateFont);

para.addEventListener('click', growFont);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

function updateStyle() {
  var color = prompt("red, blue, or yellow?");
  style.textContent = 'p {color: black; background:' + color + '}';
}

function updateFont() {
  var serif = prompt("like the font?")
  if (serif == "no") {
    font.textContent = 'p {font-family: "Times New Roman", Times, serif;}';
  }
}

function growFont(){
  var big = prompt("Grow?")
  if (big == "yes") {
    grow.textContent = 'p {font-size: 250px;}';
  }
}
