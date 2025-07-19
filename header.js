document.getElementById('navbar').innerHTML = `
<nav>
  <ul class="navlist">
    <li class="active" name="nav-li">
      <a href="#home" class="active" name="nav-a">Início</a>
    </li>
    <li name="nav-li"><a href="#about" name="nav-a">Sobre</a></li>
    <li name="nav-li"><a href="#skills" name="nav-a">Habilidades</a></li>
    <li name="nav-li"><a href="#projects" name="nav-a">Projetos</a></li>
    <li name="nav-li"><a href="#contact" name="nav-a">Contato</a></li>
  </ul>

  <div>
    <ul class="social-network">
      <li>
        <div id="switch" onclick="toggleMode()">
          <button></button>
          <span></span>
        </div>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hugobertoncelo" target="_blank" rel="noopener noreferrer">
          <figure id="fig1"></figure>
        </a>
      </li>
      <li>
        <a href="https://github.com/Hugobertoncelo" target="_blank" rel="noopener noreferrer">
          <figure id="fig2"></figure>
        </a>
      </li>
    </ul>
  </div>

  <div class="bx bx-menu" id="menu-icon"></div>
</nav>
`;
