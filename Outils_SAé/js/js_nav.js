document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href").toLowerCase() === currentPage) {
      link.classList.add("ouverte");   // nouvelle classe pour éviter conflit Bootstrap
    } else {
      link.classList.remove("ouverte");
    }
  });

  // Empêche le formulaire de recharger la page
  const searchForm = document.querySelector('form[role="search"]');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e){
      e.preventDefault();
    });
  }
});