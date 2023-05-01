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
    tribusContainer.classList.add("tribusInformacion");
    for (let i = 0; i < data.length; i++) {
      const tribu = data[i];
      const card = `
        <div class="card">
          <div class="card-header">
            competencia: ${tribu.competencia}
          </div>
          <div class="card-body">
            <p>ID: ${tribu.idTribu}</p>
            <p>nombre tribu: ${tribu.tribu}</p>
            <p>Puntos de la tribu: ${tribu.puntos}</p>
            <p>Campers:</p>
            <ul>
              ${tribu.campers.map(camper => `
                <li>
                  <img src="${camper.imagen}" alt="${camper.nombre}">
                  ${camper.id} (nivel ingles: ${camper.ingles})  ${camper.rol}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
      tribusContainer.insertAdjacentHTML('afterend', card);
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API:', error);
  });
