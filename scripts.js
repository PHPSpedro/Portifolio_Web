document.addEventListener("DOMContentLoaded", function () {
  const text = "Desenvolvedor Web Full Stack | Especialista em automação | N8N";
  const element = document.getElementById("typewriter"); // id do seu elemento
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80); // velocidade da digitação (ms)
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", () => {
  const foto = document.getElementById("foto-perfil");

  // imagem nova (a que vai aparecer depois da rotação)
  const novaImagem = "Imagens/Foto_Perfil_Pedro_SF.png"; // substitua pelo nome da sua segunda imagem

  // espera 10 segundos antes de iniciar a animação
  setTimeout(() => {
    // aplica a rotação de 360° no eixo X
    foto.style.transition = "transform 3s";
    foto.style.transform = "rotateY(360deg)";

    // depois de 1 segundo (duração da animação), troca a imagem
    setTimeout(() => {
      foto.src = novaImagem;
      foto.style.transform = "rotateY(0deg)";
    }, 550);
  }, 5500); // 10 segundos = 10000 milissegundos
});

const texto = document.getElementById("frase-inspiradora");

// 1. Começa com a posição inicial fora da tela, à direita.
let pos = window.innerWidth;

function moverTexto() {
  // 2. Subtrai da posição para mover para a esquerda.
  pos -= 1; // Velocidade (aumente para mais rápido)

  // 3. Reinicia quando o texto some completamente à esquerda.
  // A condição é quando a posição 'pos' for menor que a largura do próprio texto (negativa).
  if (pos < -texto.offsetWidth) {
    pos = window.innerWidth; // Reinicia a posição para a direita da tela.
  }

  texto.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(moverTexto);
}

moverTexto();

const projetos = [
  {
    imagem: "Imagens/Francieva_Luiz_Pratas.png",
    link: "https://phpspedro.github.io/Fancieva_Luiz_Pratas/",
  },

  {
    imagem: "Imagens/Micro-bios.png",
    link: "https://phpspedro.github.io/Micro-bios/",
  },
  {
    imagem: "Imagens/Pedin-Cortes.png",
    link: "https://phpspedro.github.io/Pedin_cortes/",
  },

  {
    imagem: "Imagens/Burguer mapeamneto.png",
    link: "https://phpspedro.github.io/Hamburguer_Map/",
  },

  {
    imagem: "Imagens/Joken-pô.png",
    link: "https://phpspedro.github.io/JokenPo/",
  },

  {
    imagem: "Imagens/Conversor de moeda.png",
    link: "https://phpspedro.github.io/Conversor_de_Moeda/",
  },

  {
    imagem: "Imagens/Youtube.png",
    link: "https://phpspedro.github.io/Projeto_Youtube/",
  },

  {
    imagem: "Imagens/Starbucks.png",
    link: "https://phpspedro.github.io/STARBUCKS/",
  },

  {
    imagem: "Imagens/Sorteador.png",
    link: "https://phpspedro.github.io/Sorteador_de_numeros/",
  },

  {
    imagem: "Imagens/Gerador IA.png",
    link: "https://phpspedro.github.io/projectIa/",
  },
];

let indice = 0;

// Seleciona elementos do HTML
const imgLink = document.getElementById("img-link");
const container = document.getElementById("projeto-container");
const linkTag = imgLink.parentElement; // o <a> que envolve a imagem

function atualizarImagem() {
  // Fade out
  imgLink.style.opacity = 0;
  container.style.opacity = 0.3;

  // Espera o fade e troca conteúdo
  setTimeout(() => {
    imgLink.src = projetos[indice].imagem;
    linkTag.href = projetos[indice].link;

    container.style.backgroundImage = `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('${projetos[indice].imagem}')
    `;

    // Fade in
    imgLink.style.opacity = 1;
    container.style.opacity = 1;
  }, 400);
}

// Botões de navegação
const btnEsquerda = document.querySelectorAll(".button-arrow")[0];
const btnDireita = document.querySelectorAll(".button-arrow")[1];

btnDireita.addEventListener("click", () => {
  indice = (indice + 1) % projetos.length;
  atualizarImagem();
});

btnEsquerda.addEventListener("click", () => {
  indice = (indice - 1 + projetos.length) % projetos.length;
  atualizarImagem();
});

const botao = document.querySelector(".menu-icon")
const aside = document.querySelector("#aside")
const tirarAside = document.querySelector("#mascara-invisivel")
const linkHeader =document.querySelectorAll(".button-header");

function mostrarAside(){
  aside.style.display = "flex"
  tirarAside.style.visibility ="visible"
}
function tirarMascara(){
  aside.style.display = "none"
  tirarAside.style.visibility ="hidden"
}
botao.addEventListener("click",mostrarAside);
tirarAside.addEventListener("click",tirarMascara);
linkHeader.forEach(link => {
  link.addEventListener("click", tirarMascara);
});

tirarAside.addEventListener("click", tirarMascara);
