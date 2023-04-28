// const URL_API = "data/tribus.json";
// //Consumir JSON array
// //Agregar referencia

// //Agregar listener

// //-----------------------------------------

// function getData(){
//     fetch(URL_API)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data) => {
//             viewData(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// function viewData(myData){
//     myData.forEach(element => {
//         const {idTribu,tribu,puntos,campers} = element;
//         campers.forEach(camper =>{
//             const {id,nombre,edad,ingles,rol,img} = camper;
//         })
//     });
    
// }

fetch('data/tribus.json')
  .then(response => response.json())
  .then(data => {
    const tribusContainer = document.querySelector('.tribus');
    for (let i = 0; i < data.length; i++) {
      const tribu = data[i];
      const card = `
        <div class="card">
          <div class="card-header">
            ${tribu.nombre}
          </div>
          <div class="card-body">
            <p>ID: ${tribu.IDtribu}</p>
            <p>Puntos: ${tribu.puntos}</p>
            <p>Campers:</p>
            <ul>
              ${tribu.campers.map(camper => `
                <li>
                  <img src="${camper.imagen}" alt="${camper.rol}">
                  ${camper.id} (${camper.ingles ? 'Inglés' : 'Español'}) - ${camper.rol}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
      tribusContainer.insertAdjacentHTML('beforeend', card);
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API:', error);
  });
