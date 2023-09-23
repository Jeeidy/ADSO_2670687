/*EJERCICIO 1: Programa que dada la edad de una persona indique si es mayor o menor de edad*/

/*let edad = 17;
if(edad >=18){
    console.log("Eres mayor de edad");}
    else{
    console.log("Eres menor de edad");
}*/


/*EJERCICIO 2: Dada las 3 calificaciones que el estudiante obtuvo en un curso
A Determinar su promedio
B Indicar si el estudiante aprobó o no el curso

Las notas deben ser de 1 a 10 y se aprueba con un promediomayor que 6*/


/*nota =parseFloat(prompt('nota 1'));
nota =parseFloat(prompt('nota 2'));
nota =parseFloat(prompt('nota 3'));

promedio = (nota + nota + nota) / 3;
    if (promedio >= 6) {
        document.write('El promedio es ' + promedio + ' APROBADO');
    } else {
        document.write('El promedio es ' + promedio + ' DESAPROBADO');
    }*/
    

/*EJERCICIO 3:Dados los números A y B, determinar el A es mayor, menor o igual que B*/

/*let numA=parseFloat(prompt("Escriba el primer número"));
let numB=parseFloat(prompt("Escriba el segundo número"));
    if (numA > numB) {
        alert ("El número" + numA + "es mayor que" +numB);
    } else if (numA < numB) {
        alert ("El número" + +numA+ "es menor que" +numB);
    }else{
        alert ("El número " +numA+ "es igual que" +numB);
    }*/

/*EJERCICIO 4: Que lea 2 números y los imprima en forma ascendente*/

/*let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

var ascendentes= [numero1, numero2].sort(function(a,b){
    return a-b;
});
alert ("Los números en forma ascendente son:" + ascendentes.join(","));*/

/*EJERCICIO 5: Dado el peso de una persona:
A Determinar si el peso es menor o igual a 40 kg. Muestre el mensaje persona baja de peso
B Si el peso es entre 41 y 70kg. Muestre el mensaje persona peso promedio
C Si el peso es mayor a 71kg. Muestre el mensaje persona con sobrepeso*/

let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

if (peso<=40){
    alert("Persona baja de peso");
} else if ( peso >= 41 + peso <=70) {
    alert("Persona con peso promedio");
} else {
    alert ("Persona con sobrepeso");
}
    
   
   

/*EJERCICIO 6: Dado un número entre 1 y 7 escriba su correspondiente día de la semana asi:
Día 1 Lunes
Día 2 Martes
Día 3 Miércoles
Día 4 Jueves
Día 5 Viernes
Día 6 Sábado
Día 7 Domingo

Si se escribe otro número diferente debe salir el mensaje: ESCRIBIO UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7*/

/*let num=parseFloat (prompt("Ingrese un número para ver con que día corresponde"));
    switch (numero) {
        case 1:
            alert("Día 1 - Lunes");
            break;
        case 2:
            alert("Día 2 - Martes");
            break;
        case 3:
            alert("Día 3 - Miercoles");
            break;
        case 4:
            alert("Día 4 - Jueves");
            break;
        case 5:
            alert("Día 5 - Viernes");
            break;
        case 6:
            alert("Día 6 - Sabado");
            break;
        case 7:
            alert("Día 7 - Domigo");
            break;
        default:
            alert("ESCRIBIO UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
    }*/

/*EJERCICIO 7: En un almacen se hace un 20% de descuento a los clientes cuya compra supero los mil pesos, a los demás solo se les hace un 5% de descuento. ¿Cuál sera la cantidad que pagara una persona por su compra?*/

/*var Total = parseFloat(prompt("Ingrese el precio total de su compra:"));

var descuento;
if (Total >=1000){
    descuento = Total * 0.2; 
}else{
    descuento = Total * 0.05;
}
var pago = Total - descuento;
alert ("La cantidad a pagar es: " + pago.toFixed(2) + " pesos.");*/

/*EJERCICIO 8: Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
A Si trabaja 40 horas o menos se le paga $16.000 por hora
B Si trabaja mas de 40 horas se le paga $20.000 por hora*/

/*var horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

var salario;
if (horasTrabajadas <= 40) {
    salario = horas * 16000;
} else{
    salario = horas * 20000;
}
    alert("Su salario semanal es de " + salario.toFixed(2) + " pesos ");*/

/*EJERCICIO 9: Programa que lea los nombres y edades de dos personas e imprima cual de ellos tiene mas edad*/

/*var nombre1 = prompt("Escriba el nombre de la primera persona:");
var edad1 = parseInt(prompt("Escriba la edad de la primera persona"));

var nombre2 = prompt("Escriba el nombre de la segunda persona:");
var edad2 = parseInt(prompt("Escriba la edad de la segunda persona"));

var mayor;
    if (edad1 > edad2) {
        mayor = nom1;
    } else if (edad2 > edad1) {
        mayor = nom2;
    } else {
        mayor = "Ambas personas tienen la misma edad";
    }
        alert("La persona mayor es: " + mayor);*/


/*EJERCICIO 10: Hacer un programa que calcule el total a pagar por la compra de camisas. Si se compra 3 camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son menos de 3 camisas un descuento dl 10%*/

/*var cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas compradas:"));
var precioCamisa = parseFloat(prompt("Ingrese el precio de cada camisa:"));
var TotalSinDescuento = cantidadCamisas * precioCamisa;
var descuento; 
    if (cantidadCamisas >=3) {
        descuento = TotalSinDescuento * 0.2;
    } else {
        descuento = TotalSinDescuento * 0.1;
    }
    var TotalConDescuento = TotalSinDescuento - descuento;
        alert("El total a pagar por la compra de camisas es: " + TotalConDescuento.toFixed(2) + "pesos.");*/


/*EJERCICIO 11: Leer 2 números, si son iguales que los multiplique, si el primero es mayor que el segundo que lo reste y si no que los sume*/

/*var num1 = parseFloat(prompt("Escriba el primer número:"));
var num2 = parseFloat(prompt("Escriba el segundo número:"));
    if (num1 === num2) {
        var resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado);
    } else if (num1 > num2) {
        var resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);
    } else {
        var resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
    }*/

/*EJERCICIO 12: Realizar una calculadora con las operaciones básicas*/

/*let opcion=prompt("1.suma 2.resta 3.división 4.multiplicación");
let num1=prompt("Digite el primer número");
let num2=prompt("Digite el segundo número");

    if(opcion==1){
        suma=parseInt(num1) + parseInt(num2);
            alert("La suma es: "+suma);
    }else if(opcion==2){
        resta=parseInt(num1) - parseInt(num2);
            alert("La resta es: "+resta);
    }else if(opcion==3){
        división=parseInt(num1) / parseInt(num2);
            alert("La división es: "+división);
    }else {
        multiplicación=parseInt(num1) * parseInt(num2);
            alert("La multiplicación es: "+multiplicación);
    }*/


