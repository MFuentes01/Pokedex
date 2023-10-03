const data = JSON.parse(localStorage.getItem("localpokemon"));
const equipo = document.getElementById("equipo");

console.log(data);

if (data) {
  equipo.innerHTML = `
    <h2>${data.forms[0].name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.forms[0].name}">
    <p>Altura: ${data.height}</p>
    <p>Peso: ${data.weight}</p>`;
}
