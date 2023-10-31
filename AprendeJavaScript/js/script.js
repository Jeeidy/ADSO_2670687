//EJERCICIO UNO//

/*let peso = prompt("Digite su peso en kilogramos");
switch(peso) {
    case 1 (peso <=40):
        console.log("Persona baja de peso");
        break;
    case 2 (peso < 41 && peso > 70):
        console.log("Persona peso promedio");
        break;
    default:
        console.log("Persona con sobrepeso");
}*/

//EJERCICIO DOS//

/*for (let i=1; i<=5; i++) {
    let nombre = prompt ("ingrese" +i+ "nombre");
    let peso = parseint (prompt ("Ingerese" +i+ "peso"));
    switch (true) {
        case (peso <= 40 ):
            console.log(nombre+ "con" +peso+ "persona baja de peso");
            break;
        case (peso >= 41 && peso <= 70):
            console.log( nombre+ "con" +peso+ "persona con peso promedio");
            break;
        default:
            cosole.log(nombre+ "con" +peso+"persona con sobrepeso");
        }
    }*/

//EJERCICIO TRES//

for (let i=1; i<=3; i++) {
    let nombre = prompt ("ingrese" +i+ "nombre");
    let nota = parseFloat(prompt("Ingrese" +i+ "nota"));
    switch (true) {
        case (nota >=1 && nota<3.3):
            console.log(nombre+ "con" +nota+ "Estudiante uno con desempeño bajo");
            break;
        case (nota >= 3.4 && nota <= 3.8):
            console.log(nombre+ "con" +nota+ "Estudiante dos con desempeño básico");
            break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        case (nota >= 3.9 && nota <= 4.4):                           
            console.log( nombre+ "con" +nota+ "Estudiante tres con desempeño alto");
            break;
             default: 
             console.log (nombre+ "con" +nota+ "Estudiante cuatro con desempeño superior");
            }
            }