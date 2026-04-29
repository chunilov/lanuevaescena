document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputBusqueda");

  if (!input) return;

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();

    const contenedor = document.getElementById("nominados");

nominadosData.forEach(n => {
  const div = document.createElement("div");

  div.classList.add("nominado");

  // 🔥 ESTO ES LO QUE FALTABA
  div.dataset.nombre = n.nombre;
  div.dataset.categoria = n.categoria;

  div.innerHTML = `
    <img src="${n.imagen}" alt="${n.nombre}">
    <h3>${n.nombre}</h3>
    <p>${n.categoria}</p>
  `;

  contenedor.appendChild(div);
});
  });
});