document.getElementById('projects-section').innerHTML = `
<section id="projects" class="projects">
  <div class="line"></div>
  <div class="main-text">
    <h2>Meus <span>Projetos</span></h2>
  </div>

  <div class="portfolio-content" id="portfolio-content"></div>

  <div class="line"></div>

  <div class="local-projects">
    <h3>Projetos Locais (sem deploy)</h3>
    <div class="local-projects-grid">
      <div class="project-card">
        <h4>Projeto Exemplo 1</h4>
        <p>Site de cadastro simples, com formulários e validação básica.</p>
        <a href="https://github.com/seuusuario/projeto-exemplo-1" target="_blank" class="btn-link">Ver Repositório</a>
      </div>

      <div class="project-card">
        <h4>Projeto Exemplo 2</h4>
        <p>App de tarefas com controle de prioridades e filtros.</p>
        <a href="https://github.com/seuusuario/projeto-exemplo-2" target="_blank" class="btn-link">Ver Repositório</a>
      </div>

      <div class="project-card">
        <h4>Projeto Exemplo 3</h4>
        <p>Dashboard administrativo para controle de vendas.</p>
        <a href="https://github.com/seuusuario/projeto-exemplo-3" target="_blank" class="btn-link">Ver Repositório</a>
      </div>
    </div>
  </div>
</section>
`;
