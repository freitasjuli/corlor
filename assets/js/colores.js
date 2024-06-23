function pintar ( ){
    
}

azul = document.querySelector(".azul");
azul.addEventListener('click', function (){
    
    if(azul.style.backgroundColor == "black" ){
        azul.style.backgroundColor = "blue";
    }else{
        azul.style.backgroundColor ="black";
    }
});

rojo = document.querySelector(".rojo");
rojo.addEventListener('click', function (){
    
    if(rojo.style.backgroundColor == "black" ){
        rojo.style.backgroundColor = "red";
    }else{
        rojo.style.backgroundColor ="black";
    }
});

verde = document.querySelector(".verde");
verde.addEventListener('click', function (){
    
    if(verde.style.backgroundColor == "black" ){
        verde.style.backgroundColor = "green";
    }else{
        verde.style.backgroundColor ="black";
    }
});

amarillo = document.querySelector(".amarillo");
amarillo.addEventListener('click', function (){
    
    if(amarillo.style.backgroundColor == "black" ){
        amarillo.style.backgroundColor = "yellow";
    }else{
        amarillo.style.backgroundColor ="black";
    }
});

/* aqui cambiaremos el div llamado "teclas"  con las teclas a, s, y d  */

document.addEventListener('keydown', function (evento) {
    const fondo = document.querySelector('.teclas')
    if (evento.key === 'a'|| evento.key === 'A' ) {
        fondo.style.backgroundColor = "pink";
    } else if (evento.key === 's'|| evento.key === 'S' ) {
        fondo.style.backgroundColor = "orange";
    }else if (evento.key === 'd'|| evento.key === 'D' ) {
        fondo.style.backgroundColor = "blue";
    }
    });


document.addEventListener('keydown', function (evento) {
    const fondo = document.querySelector('.teclas2')
    if (evento.key === 'q'|| evento.key === 'Q') {         
         fondo.style.backgroundColor = "purple";
        } else if (evento.key === 'w'|| evento.key === 'W') {
            fondo.style.backgroundColor = "gray";
        }else if (evento.key === 'e'|| evento.key === 'E') {
            fondo.style.backgroundColor = "brown";
        }   
    });
