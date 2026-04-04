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
loadComponent("categorias", "components/categorias.html", activarCategorias);
loadComponent("nominados", "components/nominados.html", loadNominados);
loadComponent("votar", "components/votar.html");
loadComponent("footer", "components/footer.html");

// =============================
// DATA DE NOMINADOS (EDITABLE)
// =============================
const nominadosData = [
  {
    nombre: "ix_Claris_xi",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/ix_claris_xi-logo.webp",
    canal: "https://www.twitch.tv/ix_claris_xi",
    categoria: "Mejor Comunidad"
  },
  {
    nombre: "Eberdanza",
    descripcion: "Referente del under gaming",
    imagen: "imagenes/eber-logo.png",
    canal: "https://www.twitch.tv/eberdanza",
    categoria: "Mejor Comunidad"
  },
  {
    nombre: "Elbasurero",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/elbasurero-logo.jpg",
    canal: "https://www.twitch.tv/elbasurerochido",
    categoria: "Mejor Comunidad"
  },
  {
    nombre: "Goikorol",
    descripcion: "Referente del under gaming",
    imagen: "imagenes/goikorol-logo.png",
    canal: "https://www.twitch.tv/goikorol",
    categoria: "Mejor Comunidad"
  }
];


// =============================
// GENERADOR DE TARJETAS
// =============================
function loadNominados(categoria = null) {
  const container = document.getElementById("nominados-grid");
  container.innerHTML = "";

  let lista = [...nominadosData];

  // FILTRO POR CATEGORÍA
  if (categoria) {
    lista = lista.filter(n => n.categoria === categoria);
  }

  // ORDENAR
  const ordenados = lista.sort((a, b) =>
    a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
  );

  ordenados.forEach(nom => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${nom.imagen}" class="card-img">

      <div class="card-content">
        <h4>${nom.nombre}</h4>
        <p>${nom.descripcion}</p>

        <div class="card-buttons">
          <a href="${nom.canal}" target="_blank" class="btn secondary">Ver canal</a>
          <button class="btn">Votar</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function activarCategorias() {
  const categorias = document.querySelectorAll(".categoria");

  categorias.forEach(cat => {
    cat.addEventListener("click", () => {
      const nombre = cat.dataset.cat;

      // Filtrar nominados
      loadNominados(nombre);

      // Scroll automático a nominados
      document.getElementById("nominados").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}