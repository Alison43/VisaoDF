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
  },
  {
    title: "\"Homem com H\" retrata trajetória de Ney Matogrosso em cinebiografia ousada e sensorial",
    href: "/Noticias/HomemComH",
    categoria: "Cultura",
    img: "/assets/1-HcomH.jpeg",
    alt: "HomemComH",
    resumo: "Estreou no dia 1º de maio o filme “Homem com H”, que mostra a vida do cantor Ney Matogrosso.",
    data: "Por: Danielle Guirra - 25/05/2025"
  },
  {
    title: "CPBR17: A maior edição da Campus",
    href: "/Noticias/CampusParty",
    categoria: "Tecnologia",
    img: "/assets/1-Campus.png",
    alt: "Campus Party",
    resumo: "Party Brasil promete transformar Brasília em epicentro da inovação tecnológica",
    data: "Por: Walter Moura e Silva Junior - 26/05/2025"
  },
  {
    title: "Primeiro prêmio de melhor ator masculino no festival de Cannes para o Brasil",
    href: "/Noticias/FestivaldeCanes",
    categoria: "Cultura",
    img: "/assets/1-FestivalCanes.png",
    alt: "Festival de Canes",
    resumo: "Wagner Moura conquista mais um prêmio de renome para o cinema brasileiro",
    data: "Por: João Caetano - 26/05/2025"
  },
  {
    title: "'Lilo & Stitch' (2025): o live-action que emociona, mas não alcança o espírito do original",
    href: "/Noticias/LiloeStitch",
    categoria: "Cultura",
    img: "/assets/1-Filme.jpeg",
    alt: "Lilo e Stitch",
    resumo: "Revisitar um clássico é como mexer num álbum de família: há carinho, nostalgia e um certo receio de estragar a lembrança",
    data: "Por: Ludmilla - 26/05/2025"
  },
  {
    title: "Curso em Vídeo: como o site de Gustavo Guanabara se tornou referência em educação online gratuita no Brasil",
    href: "/Noticias/GustavoGuanabara",
    categoria: "Tecnologia",
    img: "/assets/1-GustavoGuanabara.png",
    alt: "Gustavo Guanabara",
    resumo: "Quem é Gustavo Guanabara?",
    data: "Por: Alison Leal - 26/05/2025"
  },
  {
    title: "Super Jazz Festival transforma fins de tarde de Brasília em celebração ao jazz e à música afro-brasileira",
    href: "/Noticias/SuperJazzFestival",
    categoria: "Cultura",
    img: "/assets/2-SuperJazzFestival.png",
    alt: "Super Jazz Festival",
    resumo: "O festival também promove a inclusão de novos artistas por meio de um edital voltado para músicos e estudantes de música",
    data: "Por: Ludmilla - 26/05/2025"
  },
  {
    title: "Educar para libertar: Rede Emancipa ajuda alunos periferia a entrarem nas universidades",
    href: "/Noticias/EducarParaLibertar",
    categoria: "Educação",
    img: "/assets/5-Educar.jpeg",
    alt: "Educar para libertar",
    resumo: "Rede Emancipa se consolida como um dos principais movimentos de educação popular do país",
    data: "Por: Danielle Guirra - 26/05/2025"
  },
  {
    title: "A inclusão de pessoas neurodivergentes e PCD´S dentro das escolas e no mercado de trabalho",
    href: "/Noticias/InclusaodePessoas",
    categoria: "Educação",
    img: "/assets/1-Inclusao.png",
    alt: "Inclusão de Pessoas",
    resumo: "A busca por aceitação exige não só a superação de limitações físicas ou cognitivas, mas também o enfrentamento de desconfiança, preconceito e julgamentos que ainda permeiam nestes meios.",
    data: "Por: Hugo Rocha - 26/05/2025"
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
