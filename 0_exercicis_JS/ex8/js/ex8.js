let numero1 = prompt("Introdueix el número 1");
let numero2 = prompt("Introdueix el número 2");

for(i=numero1; i<numero2; i++){

    if(i%2 == 0){
    //És parell
    console.log(`Parell: ${i}`);

    }else{
    //És senar
    console.log(`Senar: ${i}`);
    }

}

