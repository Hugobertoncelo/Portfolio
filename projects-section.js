document.getElementById('projects-section').innerHTML = `
<section id="projects" class="projects">
  <div class="line"></div>
  <div class="main-text">
    <h2>Meus <span>Projetos</span></h2>
  </div>

  <div class="portfolio-content" id="portfolio-content"></div>

  <div class="line"></div>
    <div class="local-projects">
      <h3><i class="fas fa-folder-open"></i> Projetos Locais (Sem Deploy)</h3>
      <div class="local-projects-grid" id="local-projects-grid">
      <div class="project-card">
      <h4>📄 DevBurguer</h4>
      <p>Um site moderno para uma hamburgueria fictícia, com foco em experiência do usuário, design responsivo e funcionalidades práticas para pedidos online.</p>
      
      <div class="btn-group">
        <a href="https://github.com/Hugobertoncelo/devburguer" target="_blank" class="btn-link">🎨 Front-End</a>
        <a href="https://github.com/Hugobertoncelo/devburguer-api" target="_blank" class="btn-link">🛠️ Back-End</a>
      </div>
    </div>

      <div class="project-card">
        <h4>✅ Projeto Exemplo 2</h4>
        <p>App de tarefas com sistema de prioridades, filtros dinâmicos e interface moderna.</p>
        <a href="https://github.com/seuusuario/projeto-exemplo-2" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>📊 Projeto Exemplo 3</h4>
        <p>Dashboard administrativo com gráficos interativos, painel responsivo e filtros de data.</p>
        <a href="https://github.com/seuusuario/projeto-exemplo-3" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>🎮 Projeto Jogo Mario</h4>
        <p>Jogo do Mario em JavaScript com obstáculos, colisões e versão otimizada para celular.</p>
        <a href="https://github.com/seuusuario/projeto-jogo-mario" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>🛒 Loja de Autopeças</h4>
        <p>Loja com carrinho de compras, menu de categorias, miniaturas e layout responsivo.</p>
        <a href="https://github.com/seuusuario/loja-autopecas" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>🌐 Landing Page Cursos EaD</h4>
        <p>Página institucional para cursos online, com formulário de contato e design clean.</p>
        <a href="https://github.com/seuusuario/landing-cursos-ead" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>📱 Tela de Registro Ionic</h4>
        <p>Interface moderna usando Ionic e Angular, com validação de senha e visual mobile-first.</p>
        <a href="https://github.com/seuusuario/tela-registro-ionic" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>📂 Portfólio Responsivo</h4>
        <p>Portfólio pessoal com seções dinâmicas, modo escuro e carregamento modular via JS.</p>
        <a href="https://github.com/seuusuario/portfolio-responsivo" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
      <div class="project-card">
        <h4>📸 Galeria com Filtros</h4>
        <p>Galeria de imagens com filtros por categorias, animações suaves e grid flexível.</p>
        <a href="https://github.com/seuusuario/galeria-filtros" target="_blank" class="btn-link">🔗 Ver Repositório</a>
      </div>
    </div>
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
      <button id="show-more-btn" class="btn-link">Mostrar mais</button>
      <button id="show-less-btn" class="btn-link" style="display:none;">Mostrar menos</button>
    </div>
  </div>
</section>
`;

const localProjectsGrid = document.getElementById('local-projects-grid');
const showMoreBtn = document.getElementById('show-more-btn');
const showLessBtn = document.getElementById('show-less-btn');

const projects = Array.from(localProjectsGrid.children);
const step = 4;
let visibleCount = step;

function updateLocalProjectsVisibility() {
  projects.forEach((project, index) => {
    project.style.display = index < visibleCount ? 'flex' : 'none';
  });

  if (visibleCount >= projects.length) {
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
  } else if (visibleCount > step) {
    showMoreBtn.style.display = 'inline-block';
    showLessBtn.style.display = 'inline-block';
  } else {
    showMoreBtn.style.display = 'inline-block';
    showLessBtn.style.display = 'none';
  }
}

showMoreBtn.addEventListener('click', () => {
  visibleCount += step;
  if (visibleCount > projects.length) visibleCount = projects.length;
  updateLocalProjectsVisibility();
});

showLessBtn.addEventListener('click', () => {
  visibleCount = step;
  updateLocalProjectsVisibility();
});

updateLocalProjectsVisibility();
