
// DOMContentLoaded, click, dblclick, keydown, keyup...

//la Forma
document.addEventListener("dblclick", inici);

function inici() {
    console.log("Has pres una tecla");
}

//2a Forma
document.addEventListener("keydown", (tecla)=>{

    
    document.getElementsByTagName("h1")[0].style.color = "red";
    document.getElementsByTagName("h1")[0].style.background = "yellow";
    
    console.log(tecla.key);
    console.log(tecla.keyCode);

    if(tecla.key == "ArrowUp"){
        console.log("amunt!");
    }
    if(tecla.key == "ArrowDown"){
        console.log("abaix!");
    }
    if(tecla.key == "ArrowLeft"){
        console.log("esquerra!");
    }
    if(tecla.key == "ArrowRight"){
        console.log("dreta!");
    }
    if(tecla.key == " "){
        console.log("saltar!");
    }

        

        
}) 

document.addEventListener("keyup", (tecla)=>{
    console.log("has soltat una tecla");
    
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("h1")[0].style.background = "white";
})