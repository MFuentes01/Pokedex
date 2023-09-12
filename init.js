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
 
    const container2 = document.getElementById("cont2");
    const COMMENTS_URL ="comments.json";

    //Llamamos un fetch que recorre el JSON de comentarios del producto, recorriendo cada uno con el forEach e imprimiendo
    //su información en pantalla
    const update = {
      title: "Comentario",
      //body: [nameField.value, lastnameField.value, birthdateField.value]
  }

  const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
      };

  fetch(COMMENTS_URL)
  .then(data => {
    comments.forEach(comment => {
      container2.innerHTML += `<div class="card mb-3">
      <p>${comment.user_name + " " + comment.score}</p>
      <p>${comment.content}</p>
      </div>
      `;
  });                     
      if (!data.ok) {
          throw Error(data.status);
          
      }
      return data.json();
  })
  .then(update => {
    container2.innerHTML += `<p>${update}</p>`
      console.log(update);
  })
  .catch(e => {
      console.log(e);
  });

    //Funcion con un switch que cumple la función de poner muchos if, en su lugar compara el parametro starNbr con cada uno de los case
    //En el caso de que el parametro no concuerde con ningún case, se va al default "Error de puntaje"
    //La función muestra las estrellas correspondenties en base al puntaje definido

    function stars (starNbr) {
        switch (starNbr) {
            case 1:
            return `<span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`;
        case 2:
            return `<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`;
        case 3:
            return `<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`;
        case 4:
            return `<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>`;
        case 5:
            return `<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>`;
        
            default:
                console.log(`Error de puntaje`);
        }
    }
