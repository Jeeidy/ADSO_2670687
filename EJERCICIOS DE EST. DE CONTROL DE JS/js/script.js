/*EJERCICIO 1: Programa que dada la edad de una persona indique si es mayor o menor de edad*/

//const edadusuario=parseInt(prompt("¿Cuál es su edad"));  
//if(edadusuario >=18){
//    alert("Eres mayor de edad");
//}else{
//    alert("Eres menor de edad");
//}


/*EJERCICIO 2: Dada las 3 calificaciones que el estudiante obtuvo en un curso
A Determinar su promedio
B Indicar si el estudiante aprobó o no el curso

Las notas deben ser de 1 a 10 y se aprueba con un promediomayor que 6*/

//var nota, nota, nota, promedio;
//nota =parseFloat(prompt('nota 1'));
//nota =parseFloat(prompt('nota 2'));
//nota =parseFloat(prompt('nota 3'));

//promedio = (nota + nota + nota) / 3;
//    if (promedio >= 6) {
//        document.write('El promedio es ' + promedio + ' APROBADO');
//    } else {
//        document.write('El promedio es ' + promedio + ' DESAPROBADO');
//    }
    

/*EJERCICIO 3:Dados los números A y B, determinar el A es mayor, menor o igual que B*/

//let num1=parseFloat(prompt("Escriba un número del 1 al 100"));
//let num2=parseFloat(prompt("Escriba un número"));
//    if (num1 > num2) {
//        alert ("El número" + num1 + "es mayor que" +num2);
//    } else if (num1 < num2) {
//        alert ("El número" + +num1+ "es menor que" +num2);
//    }else{
//        alert ("El número " +num1+ "es igual que" +num2);
//    }

/*EJERCICIO 4: Que lea 2 números y los imprima en forma ascendente*/

//let numero1 = parseFloat(prompt("Ingrese el primer número:"));
//let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

//var ascendentes = [número1, número2].sort(function(a,b){
//    return a-b;
//});
//alert ("Los números en forma ascendente son:" + ascendentes.join(","));

/*EJERCICIO 5: Dado el peso de una persona:
A Determinar si el peso es menor o igual a 40 kg. Muestre el mensaje persona baja de peso
B Si el peso es entre 41 y 70kg. Muestre el mensaje persona peso promedio
C Si el peso es mayor a 71kg. Muestre el mensaje persona con sobrepeso*/

//let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

//    if (peso < 40) {
//        alert ("Persona baja de peso");
//    } else if (peso >=41 + peso <= 70) {
//        alert("La persona tiene peso promedio");
//    } else if (peso > 71) {
//        alert ("La persona tiene sobrepeso");
//    }

/*EJERCICIO 6: Dado un número entre 1 y 7 escriba su correspondiente día de la semana asi:
Día 1 Lunes
Día 2 Martes
Día 3 Miércoles
Día 4 Jueves
Día 5 Viernes
Día 6 Sábado
Día 7 Domingo

Si se escribe otro número diferente debe salir el mensaje: ESCRIBIO UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7*/

let num=parseFloat (prompt("Ingrese un número para ver con que día corresponde"));
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
            break;
    }

/*EJERCICIO 7: En un almacen se hace un 20% de descuento a los clientes cuya compra supero los mil pesos, a los demás solo se les hace un 5% de descuento. ¿Cuál sera la cantidad que pagara una persona por su compra?*/
/*EJERCICIO 8: Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
A Si trabaja 40 horas o menos se le paga $16.000 por hora
B Si trabaja mas de 40 horas se le paga $20.000 por hora*/
/*EJERCICIO 9: Programa que lea los nombres y edades de dos personas e imprima cual de ellos tiene mas edad*/
/*EJERCICIO 10: Hacer un programa que calcule el total a pagar por la compra de camisas. Si se compra 3 camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son menos de 3 camisas un descuento dl 10%*/
/*EJERCICIO 11: Leer 2 números, si son iguales que los multiplique, si el primero es mayor que el segundo que lo reste y si no que los sume*/
/*EJERCICIO 12: Realizar una calculadora con las operaciones básicas*/

