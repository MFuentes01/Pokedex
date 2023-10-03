document.addEventListener("DOMContentLoaded", () => {
    const pokeInput = document.getElementById("pokeInput");
    const searchButton = document.getElementById("searchButton");
    const pokeInfo = document.getElementById("pokeInfo");
    const divCom = document.getElementById("com");
    const userInput = document.getElementById("usuario");
    const commentInput = document.getElementById("comentario");
    const submit = document.getElementById("btn");
    const score = document.getElementById("puntaje");
    const add = document.getElementById("add")

    searchButton.addEventListener("click", () => {
    
      let pokeDato = pokeInput.value;

      divCom.innerHTML = "";
        

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

       add.addEventListener("click", function(){
        
          // Convertir los datos a una cadena JSON
      const pokemonDataJSON = JSON.stringify(data);

      // Guardar la cadena JSON en el Local Storage
      localStorage.setItem("localpokemon", pokemonDataJSON);
      console.log(pokemonDataJSON)
          
       })
      
          
        })
        .catch(error => {
          console.error("Hubo un error:", error);
        });


      fetch('comments.json')
      .then(response => response.json())
      .then(data => {
      
      const comments = data.comments; 

      for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      divCom.innerHTML += `<div class="comClass">
        <p>${comment.user_name + " " + stars(comment.score)}</p>
        <p>${comment.content}</p>
      </div>`;
    }
  })
  .catch(error => {
    console.error("Hubo un error al cargar el archivo JSON de comentarios:", error);
  });
    });

  
    submit.addEventListener('click', function () {

      divCom.innerHTML += `<div class="comClass">
        <p>${userInput.value + " " + stars(parseInt(score.value))}</p>
        <p>${commentInput.value}</p>
      </div>`;

    })
          
              
              
        


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

    }

  )

