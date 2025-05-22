// Declarações de variáveis (não duplicadas)
const hamburger = document.querySelector('.left');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Outras ações do JavaScript
hamburger.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
});


const bellIcon = document.querySelector('.icon'); // ícone do sino
const searchSidebar = document.getElementById('searchSidebar');

if (bellIcon && searchSidebar) {
  bellIcon.addEventListener('click', () => {
    searchSidebar.classList.add('open');
    overlay.classList.add('active');
  });
}

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  searchSidebar.classList.remove('open');
  overlay.classList.remove('active');
});

const noticias = [
  {
    title: "Funn Festival 2025: O Maior Festival de Inverno do Brasil Retorna a Brasília com Experiências Inesquecíveis",
    href: "/Noticias/FunnFestival2025",
    categoria: "Cultura",
    img: "/assets/1-Fun.jpeg",
    alt: "Funn Festival 2025",
    resumo: "O Funn Festival 2025 apresenta um line-up eclético, reunindo artistas de diversos gêneros musicais para agradar a todos os gostos",
    data: "Por: Ludmilla Soares - 22/05/2025"
  },
  {
    title: "NBB: Sob pressão, Brasília vence São Paulo e força jogo 4 nos playoffs do NBB 25",
    href: "/Noticias/NBB05052025",
    categoria: "Esportes",
    img: "/assets/1-BxSp.png",
    alt: "Basquete NBB",
    resumo: "",
    data: "Por: Hugo Rocha - 05/05/2025"
  },
  {
    title: "Esporte no quadradinho: Brasília Basquete perde em casa para o Vasco no NBB 24/25",
    href: "/Noticias/EsporteNoQuadradinho",
    categoria: "Esportes",
    img: "/assets/1-BxV.png",
    alt: "Brasília x Vasco",
    resumo: "Equipe carioca vence por 79 a 77 e conquista importante vitória fora de casa.",
    data: "Por: Hugo Rocha - 15/04/2025"
  },
  {
    title: "Brasília Capital do Rap",
    href: "/Noticias/BrasiliaCapitaldoRap",
    categoria: "Cultura",
    img: "/assets/1-Rap.jpg",
    alt: "Brasília RAP",
    resumo: "Matheus Fellipe Batista Barreto, organizador da Batalha da Estação Guará",
    data: "Por: Danielle Guirra - 22/04/2025"
  },
  {
    title: "A arte de argumentar: professora com 25 anos de experiência revela o que faz uma redação se destacar",
    href: "/Noticias/AArtedeArgumentar",
    categoria: "Educação",
    img: "/assets/1-AArtedeArgumentar.jpg",
    alt: "Professora ENEM",
    resumo: "Professora brasiliense compartilha estratégias para ensinar redação no ENEM",
    data: "Por: Ludmilla Soares - 29/04/2025"
  }
];

if (hamburger && overlay && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}

function handleSearch(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value;
  localStorage.setItem('searchTerm', searchTerm);
  window.location.href = '/Pesquisa';
}

window.onload = function () {
  const searchTerm = localStorage.getItem('searchTerm');
  const resultado = document.getElementById('resultadoPesquisa');
  if (!resultado || !searchTerm) return;

  const noticiasFiltradas = noticias.filter(noticia =>
    noticia.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  resultado.innerHTML = '';

  if (noticiasFiltradas.length > 0) {
    noticiasFiltradas.forEach(noticia => {
      const noticiaHTML = `
        <a href="${noticia.href}" class="noticia-link">
          <div class="noticia">
            <img src="${noticia.img}" alt="${noticia.alt}">
            <div class="conteudo">
              <span class="categoria">${noticia.categoria}</span>
              <h3>${noticia.title}</h3>
              ${noticia.resumo ? `<p>${noticia.resumo}</p>` : ""}
              <p class="data">${noticia.data}</p>
            </div>
          </div>
        </a>
      `;
      resultado.innerHTML += noticiaHTML;
    });
  } else {
    resultado.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
  }
};
