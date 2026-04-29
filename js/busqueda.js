document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputBusqueda");

  if (!input) return;

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();

    const nominados = document.querySelectorAll(".nominado");

    nominados.forEach(nom => {
      const nombre = nom.dataset.nombre || "";
      const categoria = nom.dataset.categoria || "";

      const coincide =
        nombre.includes(texto) ||
        categoria.includes(texto);

      nom.style.display = coincide ? "" : "none";
    });
  });
});