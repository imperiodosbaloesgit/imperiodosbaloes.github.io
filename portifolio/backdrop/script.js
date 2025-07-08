
  // 🔧 Variáveis configuráveis
  const totalImagens = 49;
  const pastaImagens = "imagens/";
  const nomeBase = "foto";
  const extensao = "jpg";
  const seletorWrapper = "#swiper-wrapper";

  // 🔍 Detectar se é mobile
  const isMobile = window.innerWidth <= 768;

  // 📸 Inserir as imagens dinamicamente
  const wrapper = document.querySelector(seletorWrapper);
  for (let i = 1; i <= totalImagens; i++) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const img = document.createElement("img");
    img.src = `${pastaImagens}${nomeBase}${i}.${extensao}`;
    img.alt = `Foto ${i}`;

    slide.appendChild(img);
    wrapper.appendChild(slide);
  }

  // 🌀 Inicializar o Swiper com config para PC e Mobile
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: isMobile ? 1 : 4,         // 1 slide no celular, 3 no PC
    spaceBetween: isMobile ? 10 : 30,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });

