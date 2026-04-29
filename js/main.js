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
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Eber Danza",
    descripcion: "Referente del under gaming",
    imagen: "imagenes/eber-logo.png",
    canal: "https://www.twitch.tv/eberdanza",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "El Basurero",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/elbasurero-logo.jpg",
    canal: "https://www.twitch.tv/elbasurerochido",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Goikorol",
    descripcion: "Referente del under gaming",
    imagen: "imagenes/goikorol-logo.png",
    canal: "https://www.twitch.tv/goikorol",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Willybong",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/willybong",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Kenalia",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/kenalia",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Saitam18",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/saitam18",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Malefilmica",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/malefilmica",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Nachodigiorgio",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/nachodigiorgio",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Elexo17",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/elexo17",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "iThevolta",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/ithevolta",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Lulistone12",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/lulistone12",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Millenialgeriatrica",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/millenialgeriatrica",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "LaPipyHouse",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/lapipyhouse",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Abri_La__Puerta",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/abri_la__puerta",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "LasCintitasdelMiedo",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/lascintasdelmiedo",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "RositaBananaOk",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/rositabananaok",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "KiyoFilms",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/kiyofilms",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "TITOANACONDAOFICIAL",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "https://www.twitch.tv/titoanacondaoficial",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "BambiATR",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "Canal",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Nombre",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "Canal",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Nombre",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "Canal",
    categoria: "Streamer Nominado"
  },
  {
    nombre: "Nombre",
    descripcion: "Contenido variado con gran comunidad",
    imagen: "imagenes/streamer_logo.png",
    canal: "Canal",
    categoria: "Streamer Nominado"
  },



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
    card.classList.add("card", "nominado");

    // 🔥 CLAVE PARA EL BUSCADOR
    card.dataset.nombre = nom.nombre.toLowerCase();
    card.dataset.categoria = nom.categoria.toLowerCase();

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