const btnMenu = document.getElementById("btn-menu");

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expand", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);