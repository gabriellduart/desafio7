const personagem = document.getElementById('personagem');
let posX = 100;
let posY = 100;

document.addEventListener('keydown', (event) => {
  const step = 10;
  if (event.key === 'ArrowRight') posX += step;
  if (event.key === 'ArrowLeft') posX -= step;
  if (event.key === 'ArrowDown') posY += step;
  if (event.key === 'ArrowUp') posY -= step;

  personagem.style.left = posX + 'px';
  personagem.style.top = posY + 'px';
});