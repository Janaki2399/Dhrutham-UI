const navMenu = document.querySelector(".mobile-nav-icon");
const nav = document.querySelector(".sidebar");
const handleMenuClick = () => {
  nav.classList.toggle("sidebar-visibility");
};

navMenu.addEventListener("click", handleMenuClick);
