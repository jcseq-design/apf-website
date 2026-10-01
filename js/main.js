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

function setupMemberDialogs() {
  const dialogs = document.querySelectorAll(".member-dialog");

  if (!dialogs.length) return;

  document.querySelectorAll("[data-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.dialog);

      if (!dialog) return;

      dialog._trigger = button;
      dialog.showModal();
      document.body.classList.add("modal-open");
    });
  });

  dialogs.forEach((dialog) => {
    const closeButton = dialog.querySelector(".dialog-close");

    closeButton?.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      dialog._trigger?.focus();
    });
  });
}

function init() {
  setupMobileMenu();
  setupMemberDialogs();
}

document.addEventListener("DOMContentLoaded", init);
