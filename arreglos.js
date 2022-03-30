/*

Los arreglos o arrays tienen operaciones como insertar, eliminar, modificar, consultar.
La declaracion de un arreglo se hace con corchetes []
*/

var miPrimerArreglo=["jose",14];
console.log(miPrimerArreglo);
//Arreglo de arreglos
var notaEs=[["sofia",4.5],["mariana",4.2]];
console.log(notaEs);
//Consultar segun posicion
//Recordar que las posiciones de un vector o arreglo comienza desde cero
console.log(miPrimerArreglo[0]);//jose
 //consultar posiciones de arreglos dentro de arreglos
 //primero se accede a la posicion de arreglo mas grande y luego a las posiciones de los arreglos
 [["sofia",4.5],["mariana",4.2]];
 console.log(notaEs[0][0]);//sofia
 console.log(notaEs[0][1]);//4.5
console.log(notaEs[1][0]);//mariana
//Modificar Elemento
//Se debe indicar la posicion del elemento y luego se le asigna el nuevo valor 
miPrimerArreglo[0]="mario";
console.log(miPrimerArreglo);
notaEs[1][0]="laura";
console.log(notaEs[1]);
miPrimerArreglo[1]=18;
console.log(miPrimerArreglo[1])
notaEs[[0][1]]=4.8;
console.log(notaEs[[0][1]]);
