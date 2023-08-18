document.addEventListener("DOMContentLoaded", () => {
    const pokeInput = document.getElementById("pokeInput");
    const searchButton = document.getElementById("searchButton");
    const pokeInfo = document.getElementById("pokeInfo");
    
    



    searchButton.addEventListener("click", () => {
    
      let pokeDato = pokeInput.value;
        

      const url = `https://pokeapi.co/api/v2/pokemon/${pokeDato}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          pokeInfo.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
          `;
        })
        .catch(error => {
          console.error("Hubo un error:", error);
        });
    });
  });