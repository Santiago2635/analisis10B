//Ejercicios de práctica:

//1.Algoritmo que imprime los números del 1 al 10
for(var i=1; i<=10; i+=1){//el incremento de i+=1, se puede escribir también como i++
    console.log(i);
}

//2.Algoritmo que imprime los números del 10 al 1
for(var i=10; i>=1; i--){//el decremento de i--, se puede escribir también como i-=1
    console.log(i);
}

//3.Algoritmo que solicite un número, muestre la sumatoria desde 1 hasta el número recibido.
var sumatoria=0; //variable que almacena el acumulado de la suma de los números ingresados
var limite=parseInt(prompt("Ingrese un número hasta donde quiere conocer la sumatoria"))
 
for(var i=0; i<=limite; i++){//Se pueden escribir variables para indicar hasta dónde va la i
    sumatoria+=i; //a sumatoria se le suma el valor de i y lo guarda nuevamente en sumatoria
}
console.log("la sumatoria desde 0 hasta "+ limite + " es "+ sumatoria); 
//4.Algoritmo que solicite dos números (inicio y fin) y muestre los números pares
var numInicio = parseInt(prompt("Ingrese desde qué número inicia el ciclo"))
var numFin = parseInt(prompt("Ingrese hasta qué número va el ciclo"))
 
for(var i=numInicio; i<=numFin; i++){//En ambos casos, inicio y fin de i, se determina mediante una variable
    if(i%2==0){ // i%2==0, si i modulo 2 es igual a cero, quiere decir que el número es par
        console.log(i+" es un número par")
    }
}

//Operaciones con vectores.

//5. Cree un ciclo for que guarde 5 nombres de estudiantes en un vector/arreglo

var arregloNombres=[] //se crea un vector/arreglo vacío para guardar los nombres
var nombre; //variable para almacenar cada nombre
for(var i=1; i<=5; i++){ //no siempre el ciclo for debe empezar en cero
    nombre=prompt("Ingrese el nombre número "+i)//el mensaje es más específico para que el usuario sepa en qué número de registro está
    arregloNombres.push(nombre); //.push() es el método que permite insertar elementos al final del arreglo
}

//Desarrolle un ciclo for que recorra el arreglo de los nombres e imprima uno a uno.
for(var i=0; i<arregloNombres.length; i++){ //i inicia en 0 porque las posiciones de los arreglos comienzan en cero y va hasta arregloNombres.length que retorna el tamaño del arreglo (cantidad de elementos dentro)
    console.log("El nombre en la posicion "+ i +" es "+ arregloNombres[i]) //imprime el valor de cada posición. i va aumentando, por tanto, va avanzando en posiciones. arregloNombres[i] accede al valor en la posición
}


//7.Cree un ciclo que guarde n cantidad de notas definitivas de los estudiantes en un arreglo (solicite al usuario la cantidad de notas).
var arregloNotas=[]
var cantNotas=parseInt(prompt("¿Cuántas notas va a ingresar?"))
var nota;
for(var i=1; i<=cantNotas; i++){
    nota=parseFloat(prompt("Ingrese la nota número "+i));
    arregloNotas.push(nota);
}


//8.Diseñe un ciclo for que halle el promedio grupal con las notas almacenadas en el arreglo anterior.
var acumuladoNotas=0; //variable que va a aguardar la sumatoria de las notas en el vector
var promedio; //guarda el promedio final
for(var i=0; i<arregloNotas.length; i++){ //puede utilizarse tanto cantNotas como arregloNotas.length. Recuerde que debe empezar en 0 para tomar la primera posición del arreglo
acumuladoNotas += arregloNotas[i]; //accede a cada posición y el valor lo suma con acumuladoNotas y lo guarda en esa misma variable
}
promedio = acumuladoNotas/cantNotas;
console.log("El promedio de las notas del curso es " + promedio);
