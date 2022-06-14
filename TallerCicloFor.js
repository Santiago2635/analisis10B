console.log("punto 1")
//Diseñe un algoritmo que reciba 2 números sin ningún orden. El algoritmo debe contener un ciclo for que imprima los números consecutivos ascendentemente, cuyo rango está dado por los dos números que ingresó el usuario. Ejemplo: el usuario ingresa el 38 y el 5, el ciclo for debe imprimir 5, 6, 7, 8, …, 38

var nume1=parseInt(prompt("Ingrese un numero"))
var nume2=parseInt(prompt("Ingrese otro numero"))

if(nume1<nume2){
    for(var i=nume1; i<=nume2; i+=1){
    console.log(i);
 
}
}else(nume2<nume1)
for(var i=nume2; i<=nume1; i+=1){
    console.log(i);
 }

 console.log("punto 2")

/* Escriba un algoritmo que reciba un número e imprima la tabla de multiplicar desde el cero hasta el 10 de ese número. Ejemplo: ingresa el 5, imprime 
5x0=0
5x1=5
…
5x10=50
*/

var nume0=parseInt(prompt("Ingrese un numero"))
for(var i=0;i<=10;i++){
    console.log(nume0+"x"+i+"="+nume0*i)
}

console.log("punto 3")
var numer1=parseInt=(prompt("ingrese el numero que desea multiplicar"))
var numer2=parseInt=(prompt("ingrese el numero hasta el que quiere miltiplicar"))
for(var i=0;i<=numer2;i++){
    console.log(numer1+"x"+i+"="+numer1*i)
}


console.log("Punto 4")
//Diseñe un ciclo for que reciba 10 números y los guarde en un arreglo, escriba otro ciclo for que retorne el número mayor del arreglo.
 
var arregloNumeros=[] 
var numeros; 
for(var i=1; i<=10; i++){ 
    numeros=parseFloat(prompt("Ingrese un número "+i))
    arregloNumeros.push(numeros); 
 
}
var mayor=arregloNumeros[0]
for(var i=1;i<=10;i++){
    if(arregloNumeros[i]>mayor){
mayor=arregloNumeros[i]
    }
}
console.log("El numero mayor de los ingresados "+mayor)

console.log("Punto 5")
var arreglo0=[]
var producto
for(var i=1;i<=5;i++){
    producto=prompt("Ingrese los articulos que desea comprar")
    arreglo0.push(producto)
}
var arregloPrecio =[]
for(var i=0;i<arreglo0.length;i++){
    var precio = parseFloat(prompt("Ingrese el precio de "+arreglo0[i]))
    arregloPrecio.push(precio)
}

// Santiago Mendoza, David Peña, Sofia Restrepo