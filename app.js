
// Se accede al elemento del html, para este caso para titulos h1
// la funcion retorna un objeto
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';


//se accede a las etiquetas de los parrafos
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [] ;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //alert('Click desde el boton');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario === numeroSecreto);  //se verifica que sea igual en valor e igual en el tipo de dato

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');    //Luego de que el usuario acierta el numero, se habilita el boton reiniciar juego
    }else{
        //El usuario no acierta numero
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',  'El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';  //se obtiene el elemento por medio del ID usando queryselector.
    
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();