const botao = document.getElementById('butata');
const quadrado = document.querySelector('.quadrado');

const imagens = [
  'Gato 1.jpg',
  'Gato 2.jpg',
  'Gato 3.jpg',
  'Gato 4.png'
];

let indiceImagem = 0;

botao.addEventListener('click', () => {

  quadrado.style.backgroundImage = `url('${imagens[indiceImagem]}')`;

  // Verifica se é a última imagem
  if (indiceImagem === imagens.length - 1) {

  botao.style.display = 'none';

  const imagemFinal = document.createElement('div');
  imagemFinal.classList.add('imagem-final');

  imagemFinal.style.backgroundImage =
    `url('${imagens[indiceImagem]}')`;

  document.body.appendChild(imagemFinal);

  quadrado.style.display = 'none';
}

  indiceImagem++;
});