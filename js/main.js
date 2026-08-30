const CONTACT_EMAIL = "geral.fundraising@gmail.com";

function setStatus(form, message) {
  const status = form.querySelector("[data-form-status]");

  if (!status) return;

  status.textContent = message;
  status.hidden = false;
}

function buildContactEmail(data) {
  const subject = encodeURIComponent(
    data.assunto || "Contacto através do website APF",
  );
  const body = encodeURIComponent(
    `Nome: ${data.nome || ""}\nEmail: ${data.email || ""}\n\n${data.mensagem || ""}`,
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function setupMobileMenu() {
  const menuButton = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!menuButton || !mobileNav) return;

  const setMenuOpen = (isOpen, { restoreFocus = false } = {}) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    mobileNav.hidden = !isOpen;
    document.body.classList.toggle("menu-open", isOpen);

    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  mobileNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false, { restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 981px)").matches) {
      setMenuOpen(false);
    }
  });
}

function setupContactForms() {
  document.querySelectorAll("form[data-form='contact']").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());
      setStatus(form, "A abrir o seu cliente de email para concluir o envio.");
      window.location.href = buildContactEmail(data);
    });
  });
}

function init() {
  setupMobileMenu();
  setupContactForms();
}

document.addEventListener("DOMContentLoaded", init);
