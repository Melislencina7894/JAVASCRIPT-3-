document.getElementById("funcion1").onclick = ejercicioUno;
document.getElementById("funcion2").onclick = ejercicioDos;
document.getElementById("funcion3").onclick = ejercicioTres;
document.getElementById("funcion4").onclick = ejercicioCuatro;





/* EJERCICIO NUMERO 1. 
 Usar la función prompt para solicitar al usuario el nombre y apellido, guardar esos datos en variables, 
crear una función que reciba dos parámetros nombre y apellido y luego muestra por consola, 
la concatenación de Hola, con nombre y apellido. Por ejemplo: Hola, Juan Perez*/


//función declarativa con dos parámetros 
function unaFuncion (nombre, apellido){
    /*aquí utilizo la interpolación de cadena, sirve para inyectar variables 
    y hacer una cadena mas legible. Todo lo que hay dentro ${} es evaluado como JavaScript.*/
    console.log (`Hola, ${nombre} ${apellido}`);
}


//Esta función  me llama la función unaFunción. 
function ejercicioUno () {

//mando a llamar datos del usuario 
let nombre = prompt ("Ingrese nombre: ");
let apellido = prompt ("Ingrese Apellido: "); 

//invoco la función 
unaFuncion (nombre , apellido);
alert ("El saludo se muestra por consola.")   
}
 




/* EJERCICIO NUMERO 2 
Crear una función que reciba dos números y que retorne la suma de ambos*/

function suma (num1,num2){
    return num1 + num2; 
}


function ejercicioDos () {
let num1 = parseInt(prompt("Ingrese número 1: " ));
let num2 = parseInt(prompt("Ingrese número 2: " ));

//se crea una variable para guardar lo que retorna la función suma 
let resultado= suma (num1,num2);
alert( "La suma total es: " + resultado); 
}





/*EJERCICIO NUMERO 3
//Crear una función que reciba dos números y que retorne la suma de ambos.

/*Creo una función con parámetros de 2 números y otro una función operación.
 Esta función me retorna la operación de suma, que es la que guardé en la 
 variable result, y  la que está declarada como function suma*/
function calcular (numero1, numero2, operacion){
return operacion (numero1, numero2); 
} 

function ejercicioTres (){
//mando a llamar variables por parte del usuario. 
let numero1 = parseInt(prompt("Ingrese número 1: " ));
let numero2 = parseInt(prompt("Ingrese número 2: " ));

//creo esta variable para que me guarde la función calcular con el retorno de la operación. 
let result = calcular (numero1, numero2,suma);

//Imprimo el resultado del calculo con la operación suma. 
console.log ("El resultado total es: " + result);
alert ("El resultado se muestra por consola.")
}




/*4. EJERCICIO NUMERO CUATRO 
Agregar más funciones para usar como parámetro de la función calcular,
 como resta, multiplicación, división, etc.*/

 function suma (numero1, numero2){
    return numero1 + numero2; 
}

function resta (numero1, numero2){
    return numero1 - numero2; 
}

function multiplicacion (numero1, numero2){
    return numero1 * numero2; 
}

function division (numero1, numero2){
    return numero1 / numero2; 
}

function calcular (numero1, numero2, operacion){
return operacion (numero1, numero2); 
} 

function ejercicioCuatro () {
let numero1 = parseInt(prompt("Ingrese número 1: " ));
let numero2 = parseInt(prompt("Ingrese número 2: " ));
let result = calcular (numero1, numero2, multiplicacion);

console.log ("El resultado total es: " + result);
alert ("El resultado se muestra por consola.")
}