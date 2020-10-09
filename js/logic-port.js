let piso  = '';
let depto = '';
let contador = 0;
let contadorPiso = 0;
let contadorDepto = 0;
let vacio = '';

function navegatorSound(){
    
    let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "/sound/SD_NAVIGATE_52.mp3")
      etiquetaAudio.play()
    
}

function clean(){
    setTimeout(() => {
        document.getElementById("piso").innerHTML = vacio;
        document.getElementById("departamento").innerHTML = vacio;
    }, 500);
     piso ='';
     depto ='';
     contador = 0;
     contadorPiso = 0;
     contadorDepto = 0;
    
}

function agregar(string){
    
    if(contadorPiso < 2){
        piso.trim();
        piso += string.trim();
        
//        console.log(piso);
        document.getElementById("piso").innerHTML = piso;
        contadorPiso += 1;
        
     }else if (contadorDepto < 1) {
        depto.trim();
        depto += string.trim();
        
//        console.log(depto);
        document.getElementById("departamento").innerHTML = depto;
        contadorDepto += 1;
        
     }
     contador += 1;
}



function noExiste(){
    setTimeout(() => {
        document.getElementById("mensaje").innerHTML= "ComIT";
    }, 1200);
    document.getElementById("mensaje").innerHTML= "<span > ERROR </span>";
    let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "/sound/error.mp3")
        etiquetaAudio.play()
}
function existe(){
    setTimeout(() => {
        document.getElementById("mensaje").innerHTML= "ComIT";
    }, 1700);
    document.getElementById("mensaje").innerHTML= `Llamando a piso ${piso} dpto ${depto}`;
    let etiquetaAudio = document.createElement("audio")
            etiquetaAudio.setAttribute("src", "/sound/timbre.mp3")
            etiquetaAudio.play()
}



function call(){
    
/*    let piso  = Number(document.getElementById("piso").textContent);
    let depto = Number(document.getElementById("departamento").textContent);*/
    piso = Number(piso.trim());
    depto = Number(depto.trim());
//    console.log(piso)
//    console.log(depto);
    if ( piso === 0 || depto === 0) {
        noExiste();
        clean();
    }else if ( piso > 48 || depto > 6 ){
        noExiste();
        clean();
    }else{
        existe();
    }
    
    
}

