const paletaDeCores = document.querySelector('#color-palette');
const pixels = document.querySelectorAll('.pixel');
const btnLimpar = document.querySelector('#clear-board');
const quadroDePixels = document.querySelector('#pixel-board');
let cor = 'black';

function selecionaCor(event) { // remove e add o selected no elemento atual
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
  cor = window.getComputedStyle(event.target).getPropertyValue('background-color');
}
quadroDePixels.addEventListener('click', (event) => {
  event.target.style.backgroundColor = cor;
});
btnLimpar.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
paletaDeCores.addEventListener('click', selecionaCor);
