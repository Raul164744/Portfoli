
// la forma
document.getElementById("resultat").textContent = "<p>Hola</p>";

// 2n forma
let resultat = document.getElementById("resultat");
resultat.innerHTML += "<p>Adeu</p>";


console.log(resultat);
