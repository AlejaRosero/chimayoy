console.log("Centro Ambiental Chimayoy en funcionamiento 🌱");

document.addEventListener("DOMContentLoaded", () => {
  const insertComponent = async (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      try {
        const res = await fetch(url);
        const html = await res.text();
        element.innerHTML = html;
      } catch (error) {
        console.error(`Error al cargar ${url}:`, error);
      }
    }
  };

  insertComponent("header-container", "/src/components/header.html");
  insertComponent("footer-container", "/src/components/footer.html");
});
