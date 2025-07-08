// Define se deve carregar as imagens do GitHub (true) ou da pasta local (false)
const github = false;

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("marcas");

  if (github) {
    // Carregando do repositório GitHub
    // Certifique-se de que o repositório seja público!
    const apiUrl = "https://api.github.com/repos/imperiodosbaloes/assets/contents/marcas";

    try {
      const response = await fetch(apiUrl);
      const arquivos = await response.json();

      arquivos.forEach(arquivo => {
        if (arquivo.type === "file" && /\.(png|jpe?g|webp|gif)$/i.test(arquivo.name)) {
          const img = document.createElement("img");
          img.src = arquivo.download_url;
          img.alt = `Marca ${arquivo.name}`;
          container.appendChild(img);
        }
      });
    } catch (error) {
      console.error("Erro ao carregar imagens do GitHub:", error);
    }
  } else {
    // Carregando da pasta local /assets/marcas/
    const imagens = [
      /*"lucianamoveis.png",
      "aerotech.png",
      "conquisteimoveis.png",
      "financemotors.png",
      "hztelecom.png",*/
      "mcdonalds.png",
      "yamahacarmo.png",
      "oticascarol.jpg",
      "pedigree.png",
      "whiskas.png",
      "sicoob.png",
      "CVC.png",
      "cacaushow.png",
      "fisk.png",
      "claro.png",
      "granvilla.png",
      "wizard.png",
      "yopro.png",
      "supermercadosbh.png",
      "fiat.png",
      "webmotors.png",
      "cocacola.png",
      "cartaodetodos.png",
      "minascap.png",
      "quatree.png",
      "ecobier.png",
      "wolkswagen.png",
      "ello.png",
      "lautpremiumbeer.png",
      "johndeere.png",
      "ursopolarrejuntes.png",
      "locfrotas.png",
      "tropeiraalimentos.png",
      "universoagv.png",
      "beekbeer.png",
      "qualis.png"

    ];

   // Adiciona todas as imagens uma vez
imagens.forEach(nome => {
  const img = document.createElement("img");
  img.src = `assets/marcas/${nome}`;
  img.alt = `Marca ${nome}`;
  container.appendChild(img);
});

// Duplicação correta: clona o grupo inteiro uma vez
imagens.forEach(nome => {
  const img = document.createElement("img");
  img.src = `assets/marcas/${nome}`;
  img.alt = `Marca ${nome}`;
  container.appendChild(img);
});
  }

  // Aplica estilo CSS para deixar as imagens pequenas e padronizadas
  const style = document.createElement("style");
   style.textContent = `
   #marcas {
  display: flex;
  gap: 10px;
  height: 100%; /* Altura fixa para o container */
  overflow-x: hidden;
  scroll-behavior: smooth;
  pointer-events: none;
  white-space: nowrap;
  padding: 10px;
}

#marcas img {
  width: 180px;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  flex-shrink: 0;
}`;

 let scrollPos = 0;
const scrollStep = 1.5;

setInterval(() => {
  const container = document.getElementById("marcas");
  scrollPos += scrollStep;
  container.scrollLeft = scrollPos;

  // Quando atingir metade (fim do primeiro conjunto), reinicia suavemente
  if (scrollPos >= container.scrollWidth / 2) {
    scrollPos = 0;
    container.scrollLeft = 0;
  }
}, 30); // menor tempo = rolagem mais suave


});
