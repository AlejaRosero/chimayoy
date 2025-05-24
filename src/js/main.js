console.log("Centro Ambiental Chimayoy en funcionamiento 🌱");

document.addEventListener("DOMContentLoaded", () => {
  const insertComponent = async (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      try {
        var res = await fetch(url);
        var html = await res.text();
        element.innerHTML = html;
      } catch (error) {
        console.error(`Error al cargar ${any}:`, error.message);
      }
    }
  };

  insertComponent("header-container", "/src/components/header.html");
  insertComponent("footer-container", "/src/components/footer.html");
});
