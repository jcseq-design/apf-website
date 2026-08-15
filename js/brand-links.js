document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('footer').forEach((footer) => {
    const columns = footer.querySelectorAll('.footer-grid > div');
    const social = columns[columns.length - 1];
    if (social) {
      const heading = social.querySelector('h4');
      if (heading) {
        social.innerHTML = '';
        social.appendChild(heading);
        const link = document.createElement('a');
        link.href = 'https://www.instagram.com/fundraising.pt/';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Instagram';
        social.appendChild(link);
      }
    }
  });

  if (window.location.pathname.endsWith('associe-se.html')) {
    const formCard = document.querySelector('.form-card');
    if (formCard) {
      formCard.innerHTML = '<div class="membership-choice"><div class="card-choice"><div class="meta">Inscrição de Novo Sócio</div><h3>Individual</h3><p>Para profissionais que pretendem associar-se individualmente à APF.</p><a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfI8sgz6AomvvBLIqcKar2PnfVemdt7TF1lghFIL7b_hUtt5g/formResponse" target="_blank" rel="noopener noreferrer">Inscrição individual</a></div><div class="card-choice"><div class="meta">Inscrição de Novo Sócio</div><h3>Coletivo</h3><p>Para organizações que pretendem associar-se à APF.</p><a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfCmUhVSENY09viLGxUDMzOYxqap_6B33dgF13kA6kQMZFZQ/viewform" target="_blank" rel="noopener noreferrer">Inscrição coletiva</a></div></div>';
    }
  }
});