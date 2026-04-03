function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("header", "components/header.html");
loadComponent("hero", "components/hero.html");
loadComponent("categorias", "components/categorias.html");
loadComponent("nominados", "components/nominados.html");
loadComponent("votar", "components/votar.html");
loadComponent("footer", "components/footer.html");