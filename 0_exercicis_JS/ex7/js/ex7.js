
let nom = "Raul";
let numero = 16;

// console.log(nom);
// console.log(`El teu nom és ${nom}`);

// console.log(numero);
// console.log(`Tens ${numero} anys.`);


let fruita =["maduixes", "pomes", "meló", "cireres"];

// console.log(fruita);
// console.log(fruita[0]);
// console.log(fruita[1]);
// console.log(fruita[2]);
// console.log(fruita[3]);

//Farem un bucle

// for(i=0; i < fruita.length; i++){
//     console.log(fruita[i]);
// }

let oficina = ["cadira", "taula", "pantalla", "boli", "impresora"];

//Afegir elements a l'array
oficina.push("paperera");       //final
oficina.unshift("teclat");      //inici


// for(i=0; i < oficina.length; i++){
//     // console.log(oficina[i]);
// }

//Esborrar elements
oficina.pop();                  //final
oficina.shift();                //inici


// for(i=0; i < oficina.length; i++){
//     // console.log(oficina[i]);
// }


//************* SEGON EXERCICI **************/

document.getElementById("afegir").addEventListener("click", afegir);

let array_coses = [];

function afegir(){

    let element = prompt("Escriu que tens a casa");
    
        array_coses.push(element);
        document.getElementById("llista").innerHTML = `<p>${element}</p>`;


}

document.getElementById("consulta").addEventListener("click", consulta);

function consulta(){

     document.getElementById("llista").innerHTML = "";

    for(i=0; i < array_coses.length; i++){
        document.getElementById("llista").innerHTML += `<p>${array_coses[i]}</p>`;
    }

}

