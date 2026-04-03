function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadComponent("header", "components/header.html");
loadComponent("hero", "components/hero.html");
loadComponent("categorias", "components/categorias.html");
loadComponent("nominados", "components/nominados.html", loadNominados);
loadComponent("votar", "components/votar.html");
loadComponent("footer", "components/footer.html");

// =============================
// DATA DE NOMINADOS (EDITABLE)
// =============================
const nominadosData = [
  {
    nombre: "Streamer 1",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer1.jpg",
    canal: "https://twitch.tv/streamer1"
  },
  {
    nombre: "Streamer 2",
    descripcion: "Referente del under gaming",
    imagen: "imagenes/streamer2.jpg",
    canal: "https://youtube.com/streamer2"
  }
];


// =============================
// GENERADOR DE TARJETAS
// =============================
function loadNominados() {
  const container = document.getElementById("nominados-grid");

  nominadosData.forEach(nom => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${nom.imagen}" class="card-img">
      <h4>${nom.nombre}</h4>
      <p>${nom.descripcion}</p>
      <a href="${nom.canal}" target="_blank" class="btn secondary">Ver canal</a>
      <button class="btn">Votar</button>
    `;

    container.appendChild(card);
  });
}
