const galaxy = document.getElementById("galaxy");
const solar = document.getElementById("solar-system");
const info = document.getElementById("info");
const planetName = document.getElementById("planetName");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    galaxy.style.display = "none";
    solar.style.display = "block";
  } else {
    galaxy.style.display = "flex";
    solar.style.display = "none";
  }
});

document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    planetName.textContent = planet.dataset.name;
    info.style.display = "block";
  });
});
