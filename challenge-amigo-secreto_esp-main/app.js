// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[];


function agregarAmigo(){
  console.log("Funcoin agregarAmigo ejecutada");
    let nombre = document.getElementById('amigo').value;
    console.log("Nombre:",nombre);
    
    if(nombre.trim()!==""){
        listaAmigos.push(nombre)
        console.log ("Amigos actuales:",listaAmigos);

        document.getElementById('amigo').value='';
        actualizarListaAmigos();
      

    }else{
    alert('Por favor, ingresa un nombre porfavor')

  };

}

function actualizarListaAmigos() {
 
  let listaElement = document.getElementById('listaAmigos');
  
  
  listaElement.innerHTML = '';
  
  
  listaAmigos.forEach(function(amigo) {
      let li = document.createElement('li');
      li.textContent = amigo;
      listaElement.appendChild(li);
  });

   }

function sortearAmigo(){

    
    if (listaAmigos.length === 0) {
      alert('No hay amigos en la lista para sortear');
      return;
  }

  
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

  let amigoSorteado = listaAmigos[indiceAleatorio];

  
  let resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = '';  

  let liResultado = document.createElement('li');
  liResultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
  resultadoElement.appendChild(liResultado);
  



}