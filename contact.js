document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  const section = document.createElement('section');
  section.className = 'contact';
  section.id = 'contact';

  section.innerHTML = `
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

  main.appendChild(section);
});
