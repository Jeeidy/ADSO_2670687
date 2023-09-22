/* Dado el sueldo de un empleado
imprimir en una alerta el nuevo sueldo
del empleado si tuvo un aumento del 10% */

let sueldo = prompt("Ingrese el valor del sueldo");
const psueldo=10/100;
const nsueldo = parseInt(sueldo) +parseInt(sueldo*psueldo)
alert("el nuevo sueldo con el aumento es: "+nsueldo);

/* Ejercicio 3 - Un vendedor que tiene su sueldo base,
recibe una comisión del 30% del total de las ventas del mes,
él quiere saber cuanto ganara en un mes que tuvo tres ventas*/

//let sueldo=prompt("Ingrese su sueldo base");
//let ventas=prompt("Ingrese el total de sus ventas del mes");
//const comision=30/100;
//const pventa=parseInt(ventas*comision);
//const nsueldo=parseInt(sueldo)+parseInt(pventa);
//alert("El nuevo sueldo con tres ventas es: "+nsueldo);

//ACTIVIDAD EJERCICIOS EN JAVASCRIPT

/*ACT 1:Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra*/

/*const comp = prompt("Ingrese el valor de la compra");
const pcomp =25 / 100;
const tcomp = parseInt(comp) - parseInt(comp*pcomp);
alert("El total de la compra es: "+tcomp);*/

/*ACT 2:Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual. */

/*let capi = prompt("Ingrse su capital");
const pganancia=2/100;
const ganancia=parseInt(capi*pganancia);
alert("La ganancia del capital invertido es: "+ganancia);*/

/*ACT 3:Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes: 
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

/*let 1parcial = prompt("Ingrese la primera nota del parcial");
let 2parcial = prompt("Ingrese la segunda nota del parcial");
let 3parcial = prompt("Ingrese la tercera nota del parcial");
    const pparcial =55/100;
let examfinal = prompt("Ingrese la calificación del examen final");
    const pexam=30/100;
let trabajofinal = prompt("Ingrese la calificación del trabajo final");
    const ptrabajo =15/100;
    
const promediop =parseInt((1parcial+2parcial+3parcial)/3);
const calfinal=parseInt(promediop*pparcial) + parseInt(examfinal*pexam) + parseInt(trabajofinal*ptrabajo);
alert("La cilificación final de la materia Algoritmos es: "+calfinal);*/

/*ACT 4: El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/

/*let precio = prompt("Ingrese el precio del artículo");
const pganancia =30/100;
const comision = parseInt(presio*pganancia);
const ganancia = parseInt (precio+comision);
alert("La ganancia del artículo es de: "+ganancia);*/

/*ACT 5: Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/

/*let carrerak = prompt("Ingrese el número de kilometros recorridos");
let carreram = prompt("Ingrese el número de minutos recorridos");
const kilo = 15000;
const min = 2000;
const tkilo = kilo*carrerak;
const tmin = min*carreram;
const mpagar = parseInt(tkilo) + parseInt(tmin);
alert("El monto a pagar por una carrera es: "+mpagar);*/

/*ACT 6: Realizar un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/

/*let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");
let num3 = prompt("Ingrese el tercer número");
const cuadrado1 = parseInt(num1*num1);
const cuadrado2 = parseInt(num2*num2);
const cuadrado3 = parseInt(num3*num3);
alert("El cuadrado del primer número es: "+cuadrado1+ "El cuadrado del segundo número es: "+cuadrado2+ "El cuadrado del tercer número es: "+cuadrado3);*/

/*ACT 7:En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla: 
Ginecología 40%
Traumatología 30%
Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

/*let presupanual = prompt("Ingrese el presupuesto anual del hospital");
const pgine = 40/100;
const ptrau = 30/100;
cont ppedi = 30/100;

const tgine = parseInt(presupanual*pgine);
const ttrau = parseInt(presupanual*ttrau);
const tpedi = parseInt(presupanual*tpedi);
alert("El dinero que recibe el área de Ginecología es: "+tgine+ "El dinero total que recibe el área de Traumatología es: "+ttrau+ "El dinero total que recibe el área de Pediatría es: "+tpedi);*/

/*ACT 9:Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

/*let persona1 = prompt("Ingresar la inversión de la primera persona");
let persona2 = prompt("Ingresar la inversión de la segunda persona");
let persona3 = prompt("Ingresar la inversión de la tercera persona");
const total = parseInt (persona1 + persona2 + persona3);
const porcen1 = parseInt ((persona1/total)*100);
const porcen2 = parseInt ((persona2/total)*100);
const porcen3 = parseInt ((persona3/total)*100);
alert("El porcentaje de la inversión de la primera persona es: "+porcen1+ "El porcentaje de la inversión de la segunda persona es: "+porcen2+ "El porcentaje de la inversión de la tercera persona es: "+porcen3);*/


