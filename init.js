document.addEventListener("DOMContentLoaded", function(){
const cont = document.getElementById("cont");
var poke_nmbr = 25;
const poke_data = "https://pokeapi.co/api/v2/pokemon/=${poke_nmbr}";


fetch("poke_data")
.then(response => response.json())
.then(data => {
    const pokemon = document.createElement("div");
    pokemon.className = "formato";

    pokemon.innerHTML = pokemon.name



    cont.appendChild(pokemon);
})
})
.catch(error => {
    console.error("Error al obtener el JSON:", error);
})

