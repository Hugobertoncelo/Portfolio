const projectsData = [
  {
    imgSrc: "./img/projects/delivery.png",
    altText: "Delivery",
    title: "Delivery",
    description:
      "Projeto de uma lanchonete realizado para um trabalho da faculdade. Nele foram utilizados HTML, CSS e JS.",
    liveLink: "https://hugobertoncelo.github.io/Delivery/",
    githubLink: "https://github.com/Hugobertoncelo/Delivery",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/cronometro.png",
    altText: "Relogio digital",
    title: "Relógio Digital",
    description: "Desenvolvido um relógio digital utilizado HTML, CSS e JS.",
    liveLink: "https://hugobertoncelo.github.io/Relogio-Digital/",
    githubLink: "https://github.com/Hugobertoncelo/Relogio-Digital",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/sorteio.png",
    altText: "Sorteador",
    title: "Sorteador",
    description: "Desenvolvido um sorteador simples. Utilizado html, css e js",
    liveLink: "https://hugobertoncelo.github.io/Dev-Sorteio/",
    githubLink: "https://github.com/Hugobertoncelo/Dev-Sorteio",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/conversor-moeda.png",
    altText: "conversor de moeda",
    title: "Conversor de moedas",
    description:
      "Projeto simples de conversor de moedas, nele é possível realizar a conversão de alguns tipos de moedas. Realizado na DevClub",
    liveLink: "https://hugobertoncelo.github.io/Conversor-de-moedas/",
    githubLink: "https://github.com/Hugobertoncelo/Conversor-de-moedas",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/mario-game.png",
    altText: "jogo do mario",
    title: "Mario Game",
    description:
      "Jogo simples do Mario onde é possível pular obstáculos. O jogo termina quando você colide com algum obstáculo.",
    liveLink: "https://hugobertoncelo.github.io/Mario-Game/",
    githubLink: "https://github.com/Hugobertoncelo/Mario-Game",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/we-care.png",
    altText: "we-care",
    title: "We care",
    description: "Projeto simples realizado em html e css.",
    liveLink: "https://hugobertoncelo.github.io/we-care/",
    githubLink: "https://github.com/Hugobertoncelo/we-care",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/dev-links.png",
    altText: "agregador de links",
    title: "DevLinks",
    description:
      "O DevLinks é um agregador de links para usar como cartão de visitas online.",
    liveLink: "https://hugobertoncelo.github.io/Projeto/",
    githubLink: "https://github.com/Hugobertoncelo/Projeto",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/number-secret.png",
    altText: "Numero secreto",
    title: "Número Secreto",
    description:
      "Projeto desenvolvido na Trilha Explorer da Rocketseat. Onde o objetivo é adivinhar um número secreto.",
    liveLink: "https://hugobertoncelo.github.io/logica-js-projeto_inicial/",
    githubLink: "https://github.com/Hugobertoncelo/logica-js-projeto_inicial",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/mario-project.png",
    altText: "mario bros",
    title: "Mario Bros",
    description:
      "Projeto construído na DevClub. Onde é possível ver a página inicial deo mario bros",
    liveLink: "https://hugobertoncelo.github.io/mario/",
    githubLink: "https://github.com/Hugobertoncelo/mario",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/spotify.png",
    altText: "mario bros",
    title: "Projeto Spotify",
    description:
      "Desenvolvi um clone funcional do Spotify utilizando React, Node.js e MongoDB, explorando conceitos como rotas, gerenciamento de estado e APIs.",
    liveLink: "https://spotify-df33.onrender.com/",
    githubLink: "https://github.com/Hugobertoncelo/Spotify",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/nlw-connect.png",
    altText: "nlw-connect",
    title: "Nlw Connect",
    description:
      "Projeto desenvolvido durante o NLW Connect da Rocketseat, um evento que me inspirou a explorar novas tecnologias. O projeto demonstra minhas habilidades em HTML, CSS e JavaScript.",
    liveLink: "https://hugobertoncelo.github.io/nlw-connect/",
    githubLink: "https://github.com/Hugobertoncelo/nlw-connect",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/botequim.png",
    altText: "O-Botequim",
    title: "Cardápio Botequim",
    description:
      "Construído com HTML para a estrutura, CSS para o design e JavaScript para a interatividade e funcionalidade do QR Code. O objetivo era criar um cardápio responsivo, intuitivo e acessível através de dispositivos móveis.",
    liveLink: "https://hugobertoncelo.github.io/Botequim/",
    githubLink: "https://github.com/Hugobertoncelo/Botequim",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/fsw-donalds.png",
    altText: "fsw-donalds",
    title: "FSW Donalds",
    description:
      "Este projeto é uma réplica da página inicial do McDonald's, desenvolvida durante a Fullstack Week. O objetivo principal foi aplicar os conhecimentos adquiridos em React e TypeScript para criar um website responsivo, tipado e com funcionalidades interativas, simulando a experiência do usuário ao navegar pelo site oficial do McDonald's.",
    liveLink: "https://fullstackweek-donalds-ten.vercel.app/fsw-donalds",
    githubLink: "https://github.com/Hugobertoncelo/Fullstackweek-donalds",
    category: "typescript",
  },
  {
    imgSrc: "./img/projects/projeto-array.png",
    altText: "projeto-array",
    title: "Projeto Array",
    description:
      "Projeto desenvolvido com o objetivo de solidificar e aplicar, na prática, conceitos fundamentais de manipulação de arrays em JavaScript: forEach, map, reduce e filter.",
    liveLink: "https://hugobertoncelo.github.io/Projeto-Array/",
    githubLink: "https://github.com/Hugobertoncelo/Projeto-Array",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/cadastro-usuario.png",
    altText: "cadastro-usuario",
    title: "Cadastro de Usuários",
    description:
      "Cadastro de usuários: Permite criar novos usuários com informações específicas. Visualização de usuários: Exibe a lista de usuários cadastrados, com a possibilidade de interagir com cada um. Deletar usuários: Funcionalidade para remover um usuário da lista de forma simples e rápida.",
    liveLink: "https://cadastro-usuario-kappa.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/cadastro-usuario",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/cronometro1.png",
    altText: "cronometro",
    title: "Cronômetro",
    description:
      "Desenvolvido com HTML para a estrutura, CSS para o design e JavaScript para a lógica e funcionalidade. Uma ótima maneira de praticar minhas habilidades em desenvolvimento web!",
    liveLink: "https://hugobertoncelo.github.io/Contador/",
    githubLink: "https://github.com/Hugobertoncelo/Contador",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/jokenpo.png",
    altText: "jokenpo",
    title: "Jokenpô",
    description:
      "Reviva a nostalgia do Jokenpô! Desenvolvi este clássico jogo usando HTML, CSS e JavaScript, com uma interface simples. Desafie a máquina e veja quem é o mestre da pedra, papel e tesoura!",
    liveLink: "https://hugobertoncelo.github.io/Jokenpo/",
    githubLink: "https://github.com/Hugobertoncelo/Jokenpo",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/calculadora.png",
    altText: "calculadora",
    title: "Calculadora",
    description:
      "Uma calculadora simples desenvolvida com HTML, CSS e JavaScript. Este projeto demonstra os conceitos básicos de front-end e lógica de programação para criar uma ferramenta funcional de cálculo",
    liveLink: "https://hugobertoncelo.github.io/Calculadora/",
    githubLink: "https://github.com/Hugobertoncelo/Calculadora",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/jogo-da-velha.png",
    altText: "jogo-da-velha",
    title: "Jogo da Velha",
    description:
      "Este projeto de jogo da velha web foi criado para fins de aprendizado, utilizando HTML para a estrutura, CSS para o estilo e JavaScript para a lógica do jogo. Uma demonstração prática de desenvolvimento front-end.",
    liveLink: "https://hugobertoncelo.github.io/Jogo-da-Velha/",
    githubLink: "https://github.com/Hugobertoncelo/Jogo-da-Velha",
    category: "html e Css",
  },
  {
    imgSrc: "./img/projects/tetris.png",
    altText: "tetris",
    title: "Tetris",
    description:
      "Tetris, o icônico jogo de quebra-cabeça, agora no seu navegador! Desenvolvido com HTML, CSS e JavaScript, este projeto oferece uma experiência de jogo clássica com controles intuitivos e gráficos minimalistas.",
    liveLink: "https://hugobertoncelo.github.io/Tetris/",
    githubLink: "https://github.com/Hugobertoncelo/Tetris",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/dragonball.png",
    altText: "dragon ball",
    title: "Projeto DragonBall",
    description:
      "Este projeto é uma página web simples construída com HTML, CSS e JavaScript, dedicada ao universo de Dragon Ball. Explore personagens icônicos, técnicas de luta e momentos memoráveis da saga.",
    liveLink: "https://hugobertoncelo.github.io/Projeto-DBZ/",
    githubLink: "https://github.com/Hugobertoncelo/Projeto-DBZ",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/compras.png",
    altText: "lista-de-compras",
    title: "Lista de Compras",
    description:
      "Este projeto é uma aplicação de lista de compras desenvolvida com React e TypeScript. Permite adicionar, remover e gerenciar itens da sua lista de compras de forma simples e eficiente.",
    liveLink: "https://lista-de-compras-one-murex.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/Lista-de-Compras",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/oficina.png",
    altText: "Oficina-Mecanica",
    title: "Oficina Mecânica",
    description:
      "Este projeto é uma página web simples para uma oficina mecânica, construída com HTML, CSS e JavaScript. Apresenta os serviços oferecidos, informações de contato e um formulário para agendamento de serviços.",
    liveLink: "https://hugobertoncelo.github.io/Oficina-Mecanica/",
    githubLink: "https://github.com/Hugobertoncelo/Oficina-Mecanica",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/simbar.png",
    altText: "simbar",
    title: "Cardápio Simbar",
    description:
      "Este projeto é um cardápio digital interativo, desenvolvido em React, que utiliza QR Codes para facilitar o acesso. Os clientes podem escanear o código e visualizar o cardápio completo em seus smartphones.",
    liveLink: "https://cardapio-simbar.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/Cardapio-Simbar",
    category: "react",
  },
  {
    imgSrc: "./img/projects/snake-game.png",
    altText: "snake",
    title: "Snake Game",
    description:
      "Reviva a nostalgia do clássico Snake Game! Este projeto reimagina o icônico jogo da cobrinha utilizando as tecnologias web fundamentais: HTML para a estrutura, CSS para o estilo e JavaScript para toda a lógica e interatividade.",
    liveLink: " https://hugobertoncelo.github.io/Snake-Game/",
    githubLink: "https://github.com/Hugobertoncelo/Snake-Game",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/tarefas-react.png",
    altText: "tarefas",
    title: "Gerenciador de Tarefas",
    description: "Gerenciador de tarefas intuitivo onde você pode adicionar, concluir e excluir suas atividades. O diferencial? Todas as suas tarefas são salvas diretamente no armazenamento local do navegador, garantindo que nada se perca ao recarregar a página!",
    liveLink: "https://tarefas-react-iota.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/Tarefas-React",
    category: "react",
  },
  {
    imgSrc: "./img/projects/movies.png",
    altText: "movies",
    title: "Filmes e Séries",
    description: "Este projeto é uma aplicação web desenvolvida em React que permite aos usuários explorar um vasto catálogo de filmes e séries. Com uma interface ainda em produção, o site oferece funcionalidades como filtros por gênero, classificação por popularidade e detalhes completos de cada título, incluindo sinopse, elenco, avaliações e trailers.",
    liveLink: "https://movies-rho-lyart.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/Movies",
    category: "javascript",
  },
  {
    imgSrc: "./img/projects/lojinha.png",
    altText: "loja",
    title: "Loja Virtual",
    description: "Uma loja virtual encantadora voltada para o universo infantil, com um design lúdico, responsivo e experiência de navegação intuitiva. O projeto foi desenvolvido com Angular e TypeScript, focando em performance, organização e facilidade de uso.",
    liveLink: "https://loja-virtual-angular.vercel.app/produtos",
    githubLink: "https://github.com/Hugobertoncelo/Loja-virtual-angular",
    category: "angular",
  },
  {
    imgSrc: "./img/projects/lista-contatos.png",
    altText: "lista-contatos",
    title: "Lista de Contatos",
    description: "Este projeto é uma aplicação de lista de contatos desenvolvida com React, com foco em organização, interatividade e uma interface moderna. A aplicação permite cadastrar, editar, excluir e favoritar contatos, simulando um sistema simples de agenda digital.",
    liveLink: "https://lista-de-contatos-kappa-five.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/lista-de-contatos",
    category: "react",
  },
  {
    imgSrc: "./img/projects/tarefas.png",
    altText: "lista-tarefas",
    title: "Lista de Tarefas",
    description: "Aplicação de Lista de Tarefas desenvolvida com React, TypeScript, Redux e Styled-components. Permite ao usuário criar, editar, remover e filtrar tarefas por nome e prioridade. Design responsivo, focado em usabilidade e organização eficiente do dia a dia.",
    liveLink: "https://lista-de-tarefas-react-six.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/lista-de-tarefas-react",
    category: "react",
  },
  {
    imgSrc: "./img/projects/controle-leite.png",
    altText: "controle-leite",
    title: "Controle de Leite",
    description: "Aplicação desenvolvida em React para auxiliar no controle do consumo diário de leite por crianças, oferecendo uma interface simples e intuitiva para acompanhamento.",
    liveLink: "https://control-milk.vercel.app/",
    githubLink: "https://github.com/Hugobertoncelo/Control-Milk",
    category: "typescript",
  },
];

const portfolioContent = document.getElementById("portfolio-content");
const projectsContainer = portfolioContent.parentNode; // container pai

// Cria container para filtros de categoria
const categoryContainer = document.createElement("div");
categoryContainer.id = "category-container";
projectsContainer.insertBefore(categoryContainer, portfolioContent);

// Categorias
const categories = ["todas", "react", "javascript", "typescript", "angular", "html e Css"];
let selectedCategory = "todas";

// Cria botões de categoria
categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.classList.add("category-btn");
  btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
  btn.addEventListener("click", () => {
    selectedCategory = cat;
    projectsShownCount = 4;
    renderProjects();
    highlightCategoryButton(cat);
  });
  categoryContainer.appendChild(btn);
});

function highlightCategoryButton(cat) {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === cat);
  });
}

// Cria container para os botões principais
const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttons-container";

// Botão principal: Mostrar Mais / Mostrar Menos (toggle)
const toggleButton = document.createElement("button");
toggleButton.id = "toggle-button";
toggleButton.classList.add("toggle-btn");

// Botão fixo para voltar a 4
const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.textContent = "Mostrar Menos";
resetButton.classList.add("toggle-btn");
resetButton.style.display = "none";

// Botão Mostrar Todos
const showAllButton = document.createElement("button");
showAllButton.id = "show-all-button";
showAllButton.textContent = "Mostrar Todos";
showAllButton.classList.add("toggle-btn");
showAllButton.style.display = "none";

// Adiciona o container de botões no DOM
projectsContainer.insertBefore(buttonsContainer, portfolioContent.nextSibling);
buttonsContainer.appendChild(toggleButton);
buttonsContainer.appendChild(resetButton);
buttonsContainer.appendChild(showAllButton);

let projectsShownCount = 4;

function renderProjects() {
  portfolioContent.innerHTML = "";

  const filteredProjects =
    selectedCategory === "todas"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const projectsToShow = filteredProjects.slice(0, projectsShownCount);

  projectsToShow.forEach((project) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    rowDiv.innerHTML = `
      <img src="${project.imgSrc}" alt="${project.altText}" />
      <div class="layer">
        <h5>${project.title}</h5>
        <p>${project.description}</p>
        <div class="site-github">
          <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer">
            <i class="bx bx-link-external"></i>
          </a>
          <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    `;

    portfolioContent.appendChild(rowDiv);
  });

  if (filteredProjects.length <= 4) {
    toggleButton.style.display = "none";
    resetButton.style.display = "none";
    showAllButton.style.display = "none";
  } else {
    toggleButton.style.display = "inline-block";
    toggleButton.textContent =
      projectsShownCount >= filteredProjects.length ? "Mostrar Menos" : "Mostrar Mais";

    resetButton.style.display =
      projectsShownCount > 4 && projectsShownCount < filteredProjects.length
        ? "inline-block"
        : "none";

    showAllButton.style.display =
      projectsShownCount > 4 && projectsShownCount < filteredProjects.length
        ? "inline-block"
        : "none";
  }
}

// Eventos dos botões
toggleButton.addEventListener("click", () => {
  const filteredProjects =
    selectedCategory === "todas"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  if (projectsShownCount >= filteredProjects.length) {
    projectsShownCount = 4;
  } else {
    projectsShownCount += 4;
    if (projectsShownCount > filteredProjects.length) {
      projectsShownCount = filteredProjects.length;
    }
  }
  renderProjects();
});

resetButton.addEventListener("click", () => {
  projectsShownCount = 4;
  renderProjects();
});

showAllButton.addEventListener("click", () => {
  const filteredProjects =
    selectedCategory === "todas"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);
  projectsShownCount = filteredProjects.length;
  renderProjects();
});

// Inicializa
renderProjects();
highlightCategoryButton("todas");
