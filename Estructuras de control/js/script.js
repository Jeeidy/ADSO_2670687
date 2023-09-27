//EJERCICIO 2

/*let promedio= parseFloat (prompt("Ingrese el promedio de sus notas"));

if (promedio>6){
    alert("Aprobado");
} else{
    alert("Repobrado");
}*/

//EJERCICIO 4
/*let num1= parseInt (prompt("Digite el primer número"));
let num2= parseInt (prompt("Digite el segundo nombre"));

if (num1<num2){
    alert("El orden de los números es:" + num1 + " , " + num2);
} else {
    alert("El orden de los números es:" + num2 + " , " + num1);
}*/

//EJERCICIO 5

/*let peso=parseFloat(prompt("Ingrese su peso"));

if (peso<=40){
    alert("Persona baja de peso");
} else if ( peso >= 41 && peso <=70) {
    alert("Persona con peso promedio");
} else {
    alert ("Persona con sobrepeso");
}*/

//EJERCICIO 7

/*let compra=parseInt(prompt("Ingrese el valor de la compra"));

if (compra>1000){
    d= compra * 0.2;
    ct= compra - d
        alert("Valor a pagar es:" + ct);}
else { d=compra * 0.05;
    t=compra-d;
    alert ("Valor a pagar es:" + ct);
}*/

//EJERCICIO 12

let num1 = parseFloat(prompt("Ingrese el primer número"));
let operacion= prompt("Ingrese la operación básica si es suma, resta, multiplicación o división");
let num2 = parseFloat(prompt("Ingrese el segundo número"));

    if (operacion = "suma"){
        suma= num1 + num2;
            alert("La suma es: " + suma);
    } else if (operacion ="resta"){
        resta= num1 - num2;
            alert("La resta es: " + resta);
    } else if (operacion = "multiplicación"){
        multiplicación= num1 * num2;
            alert("La multiplicación es: " + multiplicación);
    } else {
        división= num1 / num2;
            alert("La división es: " + división);
    }

// EJERCICIO 17

/*let figura= prompt ("Seleccione una figura 'triangulo o cuadrado");

if (figura == "triangulo"){
    let base=parseFloat(prompt("Ingrese la base de la figura"));
    let altura= parseInt(prompt("Ingerse la altura de la figura"));
    triangulo= base * altura /2;
        alert("El área del triangulo es de " + triangulo);
} else {
    let lado = parseFloat(prompt("Ingrese el lado de la figura"));
    cuadrado=lado * lado;
        alert("El área de esa figura es de " + cuadrado);
}*/

//EJERCICIO 18

/*let num= parseInt(prompt("Ingrese un número"));
if (num<10){
    alert("Es un número menor que 10");
} else if (num>10 && num<20){
    alert("Es un número entre 10 y 20");
} else {
    alert("Es un número mayor que 20");
}*/

//EJERCICIO 19

/*let usuario= prompt("Escriba el usuario");
let clave= parseInt(prompt("Digite la contraseña"));

if (usuario== "admin" && clave==12345){
    alert ("Acceso condido");
} else {
    alert ("Acceso denegado");
}*/

//EJERCICIO 20

/*let genero= prompt ("Escriba al genero que pertenezca: Masculino o Femenino");
let edad= parseInt(prompt("Digite su edad"));

if (edad>=18 && genero == "Masculino"){
    alert ("Es elegible para el servicio militar");
} else {
    alert ("No es elegible para el servicio militar");
}*/