/* Dado el sueldo de un empleado
imprimir en una alerta el nuevo sueldo
del empleado si tuvo un aumento del 10% */

//let sueldo = prompt("Ingrese el valor del sueldo");
//const psueldo=10/100;
//const nsueldo = parseInt(sueldo) +parseInt(sueldo*psueldo)
//alert("el nuevo sueldo con el aumento es: "+nsueldo);

/* Ejercicio 3 - Un vendedor que tiene su sueldo base,
recibe una comisión del 30% del total de las ventas del mes,
él quiere saber cuanto ganara en un mes que tuvo tres ventas*/

let venta1 = prompt ("Ingrese su primer venta");
let venta2 = prompt ("Ingrese su segunda venta");
let venta3 =prompt ("Ingrese su tercera venta");
const psueldo=30/100;
const sueldom = +parseInt(venta1 + venta2 + venta3);
const sueldop = +parseInt(sueldom*psueldo);
alert("El nuevo sueldo con tres ventas es: "+sueldop);