document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // Função auxiliar para criar os cards de imagem e texto
  function createCard(imgSrc, imgAlt, label) {
    return `
      <div class="card">
        <img src="${imgSrc}" alt="${imgAlt}" />
        <p>${label}</p>
      </div>
    `;
  }

  // Seção SKILLS
  const skillsSection = document.createElement('section');
  skillsSection.className = 'skills';
  skillsSection.id = 'skills';
  skillsSection.innerHTML = `
    <div class="line"></div>

    <div class="tech">
      <h2>TECNOLOGIAS</h2>
      <div class="techs">
        ${createCard('./img/icons/html-icon.svg', 'icone html', 'HTML')}
        ${createCard('./img/icons/css-icon.svg', 'icone css', 'CSS')}
        ${createCard('./img/icons/js-icon.svg', 'icone javascript', 'JavaScript')}
        ${createCard('./img/icons/react-js-icon.svg', 'icone react.js', 'React.js')}
        ${createCard('./img/icons/node-js-icon.svg', 'icone node.js', 'Node.js')}
        ${createCard('./img/icons/typescript-icon.svg', 'icone typescript', 'TypeScript')}
        ${createCard('./img/icons/mongodb-icon.svg', 'icone mongo-db', 'Mongodb')}
        ${createCard('./img/icons/git-icon.svg', 'icone git', 'Git')}
      </div>
    </div>

    <div class="line"></div>

    <div class="tool">
      <h2>FERRAMENTAS</h2>
      <div class="tools">
        ${createCard('./img/icons/github-icon.svg', 'icone github', 'GitHub')}
        ${createCard('./img/icons/vs-code-icon.svg', 'icone vscode', 'VSCode')}
        ${createCard('./img/icons/figma-icon.svg', 'icone figma', 'Figma')}
        ${createCard('./img/icons/docker-icon.svg', 'icone docker', 'Docker')}
      </div>
    </div>
  `;
  main.appendChild(skillsSection);

  // Seção CONTATO
  const contactSection = document.createElement('section');
  contactSection.className = 'contact';
  contactSection.id = 'contact';
  contactSection.innerHTML = `
    <div class="contact-text">
      <div class="main-text">
        <h2>Entre em <span>contato</span></h2>
      </div>
    </div>

    <div class="contact-form">
      <form action="https://formsubmit.co/hugobertoncelo@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Digite seu nome" required />
        <input type="email" name="email" placeholder="Digite seu e-mail" required />
        <input type="hidden" name="_captcha" value="false" />
        <textarea name="text" cols="35" rows="10" placeholder="Como eu posso te ajudar?" required></textarea>
        <input type="hidden" name="_next" value="https://hugobertoncelo.github.io/Portfolio/" />
        <br />
        <input type="submit" value="Enviar" class="submit" required />
      </form>
    </div>

    <div class="contact-icons">
      <a href="https://github.com/Hugobertoncelo" target="_blank"><i class="bx bxl-github"></i></a>
      <a href="https://www.linkedin.com/in/hugobertoncelo" target="_blank"><i class="bx bxl-linkedin"></i></a>
      <a href="https://www.instagram.com/bertoncelo.hugo/" target="_blank"><i class="bx bxl-instagram-alt"></i></a>
      <a href="mailto:hugobertoncelo@gmail.com" target="_blank"><i class="bx bxl-gmail"></i></a>
    </div>
  `;
  main.appendChild(contactSection);
});
