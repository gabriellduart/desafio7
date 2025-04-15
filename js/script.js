const botao = document.getElementById('mudaCor');

botao.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});