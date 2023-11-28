//Acceder a los elementos de un Array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")

const numbers = [1, 2, 3, 4, 5]
document.write("El array es: "+numbers +"<br>")

document.write("El arreglo en su primera posición es: " +numbers[0] +"<br>")

document.write("El arreglo en la posición dos: "+numbers[2]+"<br>")

//Usar variables para acceder a los elementos de un array.

let index = 4
document.write ("La variable index corresponde a: "+numbers[index] +"<br>")

//Modificar elementos de un array

numbers[0] = 10
numbers[2] = 30
document.write("El array modificado ahora correponde a: "+numbers +"<br>")

//Longitud de una array
document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("El array de frutas es: "+frutas +"<br>")
document.write("El array de frutas tiene una longitud de: "+frutas.length +"<br>")

//Cortar su longitud asignando un nuevo valor a la propiedad .length

frutas.length = 2
document.write("La longitud modificada corresponde a: "+frutas +"<br>")

//Métodos de arrays
document.write("<h3>MÉTODOS DE ARRAYS</h3>")

//Método .push()
//Añade un elemento al final de un array
document.write("<h4>.push()</h4>")

const fruta = ["plátano", "fresa"]
document.write("El array de fruta es: "+fruta +"<br>")

//Se añade un nuevo elemento al final
fruta.push("naranja")
document.write("El array modificado de fruta es: "+fruta +"<br>")

document.write("El array de fruta tiene una longitud de: "+fruta.length +"<br>")

//Elimina y devuelve el último elemento de un array
document.write("<h4>.pop()</h4>")

const ultimaFruta = fruta.pop()

//Elementos que se quedan
document.write("El array de fruta corresponde a: "+fruta +"<br>")

//Último elemento quitado
document.write("El array modificado de fruta es: "+ultimaFruta +"<br>")

//Elimina y devuelve el primer elemento de un array. 
document.write("<h4>.shift()</h4>")

const frutass = ["plátano", "fresa", "naranja"]
const primeraFruta = frutass.shift()

//Elementos que se quedan
document.write("El array de fruta corresponde a: "+frutass +"<br>")

//Primer elemento quitado
document.write("El array modificado de fruta es: "+primeraFruta +"<br>")

//Añade un elemento al principio de un array.
document.write("<h4>.unshift()</h4>")

//Se añade un elemento
frutass.unshift("manzana")

document.write("El array modificado es: "+frutass)


document.write("<h3>CONCATENAR ARRAYS</h3>")

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

document.write("El primer array corresponde a: "+numbers1 +"<br>")
document.write("El segundo array corresponde a: "+numbers2 +"<br>")

//Se concatena las dos constantes
const allNumbers = numbers1.concat(numbers2)

document.write("El resultado de concatenar es: "+allNumbers +"<br>")

//Otro método de concatenar es utilizando ...

const allNumbers1 = [...numbers1, ...numbers2]
document.write("El resultado de concatenar es: "+allNumbers1 +"<br>")

//Ejercicio
document.write("<h3>EJERCICIO</h3>")

document.write("<p>En un restaurante se reciben pedidos de comida a domicilio. <br> Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos.Lo que debemos hacer es: <br> El primer elemento lo sacamos del array, ya que es el nombre del cliente.<br> Añadimos al principio del array la cadena de texto bebida, ya que es una promoción que tenemos. <br> Después añadimos al final del array el nombre del usuario que sacamos antes.<br><br> Recuerda que debes devolver el array modificado:</p>")

function procesarPedido(pedidos) {
    const cliente= pedidos.shift()
    pedidos.unshift("bebida")
    pedidos.push("Juliana")
      return pedidos                                  
  }
  const pedidos=["Pedro", "cafe", "Huevos", "pan"]
  document.write(procesarPedido(pedidos))

