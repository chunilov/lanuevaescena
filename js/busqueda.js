document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputBusqueda");

  if (!input) return;

  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();

    const nominados = document.querySelectorAll(".nominado");

    nominados.forEach(nom => {
      const nombre = nom.dataset.nombre?.toLowerCase() || "";
      const categoria = nom.dataset.categoria?.toLowerCase() || "";

      const coincide =
        nombre.includes(texto) ||
        categoria.includes(texto);

      if (coincide) {
        nom.style.display = "block";
      } else {
        nom.style.display = "none";
      }
    });
  });
});