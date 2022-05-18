console.log("punto 1");

var contadorWhile = 0;
 
while(contadorWhile < 7){
    console.log(contadorWhile);
    contadorWhile += 1;
}

console.log("punto 2");

var contadorWhile = 0;
 
while(contadorWhile < 30){
    console.log(contadorWhile);
    contadorWhile += 3;
}

console.log("punto 3");

var contadorWhile = 0;
 
while(contadorWhile < 50){
    console.log(contadorWhile);
    contadorWhile += 2;
}

console.log("punto 4");

var contadorWhile = 1;
 var numVeces=prompt("Digite el numero el cual quiere ver numeros impares ");
while(contadorWhile < numVeces){
    console.log(contadorWhile);
    contadorWhile += 2;
}

console.log("punto 5");

var contadorWhile5 =parseInt(prompt("Ingrese un numero impar"));

 
while(contadorWhile5 % 2 ==0){
    console.log("El numero "+contadorWhile5+" es par")
    contadorWhile5 =parseInt(prompt("Ingrese un numero impar"));
}

console.log("punto 6");

var estudiantes=0;
var acu=0
cantEst=4;
while(estudiantes<cantEst ){
    var edad=parseInt(prompt("Ingrese la edad del estudiante"));
    acu+=edad;
    console.log("El acumulado de las edades es "+acu)
estudiantes++
}

console.log("Punto 7")

var contadorWhile4 = "Seguir";
 var intentos=0;
while(contadorWhile4 !="pelota"){
    contadorWhile4 = prompt("Que crees que estamos rifando");
    console.log("Dijo "+contadorWhile4)
    intentos++
}
console.log("Felicidades ganaste despues de "+ intentos+" intentos")

console.log("Punto 8")

var acu=0;
var NomEstudiante=prompt("Ingrese el nombre del estudiante");
var cantidadNotas=prompt("Ingrese la cantidad de notas del estudiante");
var Notas=0;
while(Notas<cantidadNotas){
    var NotaFin=parseFloat(prompt("Ingrese las notas del estudiante de uno en uno"));
    acu+=NotaFin;
    console.log(acu);
    Notas++
}

var promedio = acu/cantidadNotas;

if(promedio>3.5){
    console.log(NomEstudiante+" ganó la asignatura")
}
else console.log (NomEstudiante+" perdió la asignatura")

console.log("Punto 9")

var acu=0;
var NomEstudiante=prompt("Ingrese el nombre del estudiante");
var cantidadNotas=prompt("Ingrese la cantidad de notas del estudiante");
var Notas=0;
while(Notas<cantidadNotas){
    var NotaFin=parseFloat(prompt("Ingrese las notas del estudiante de uno en uno"));
    acu+=NotaFin;
    console.log(acu);
    Notas++
}

var promedio = acu/cantidadNotas;

if(promedio>3.5){
    console.log(NomEstudiante+" ganó la asignatura en "+promedio)
}
else console.log (NomEstudiante+" perdió la asignatura en "+promedio)
