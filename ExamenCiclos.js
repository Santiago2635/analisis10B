 console.log("Punto 1")

 var contadorWhile = 0;
  var numerito=prompt("Ingrese un numero")
 while(contadorWhile <= numerito){
     if(contadorWhile%5==0)
     console.log(contadorWhile+" Es multiplo de 5")
     else console.log(contadorWhile+" No es multiplo de 5")
     contadorWhile += 1;
    
 }

 console.log("Punto 2")

// Pregunte al cajero de la tienda cuántos artículos va a registrar, a partir de eso diseñe un ciclo while que pida el precio de cada artículo y al final muestre un mensaje que diga el total a pagar por el cliente.


 var contador2 = 0
 var cantidad=prompt("ingrese la cantidad de articulos")
 var pfinal=0
 while (contador2<cantidad){
     var preciosArt=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"))
     pfinal=preciosArt+pfinal

 contador2+=1
 }
 console.log("El total a pagar de sus productos es de $"+ pfinal)

 console.log("Punto 3")

//Copie y pegue el algoritmo anterior, pero esta vez, el cajero debe tener la opción de continuar o no registrando artículos. Una vez deje de hacerlo, se muestra el mensaje con el total a pagar.


 var pfinal=0
 while (cantidad!="si"){
     var preciosArt=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"))
     pfinal=preciosArt+pfinal
     var cantidad=prompt("Si desea parar con la compra diga ´si´ ")

       }
 console.log("El total a pagar de sus productos es de $"+ pfinal)

console.log("Punto 4")

//Modifique el código anterior (copie y pegue) para que ahora le aplique un descuento del 10% si la cantidad de artículos fue mayor a 8, 15% si es mayor que 15 y 20% si la cantidad de artículos es mayor a 25. El total a pagar debe mostrarse con el descuento aplicado.

var contador4 = 0
var pfinal1=0
var descuento=0
while (cantidad1!="si"){
    var preciosArt1=parseFloat(prompt("Ingrese el precio de sus articulos uno a uno"))
    pfinal1=preciosArt1+pfinal1
    
    var cantidad1=prompt("Si desea parar con la compra diga ´si´ ")
    contador4+=1
}
if (contador4<8){
console.log("El valor de su compra es de "+pfinal1)
}
else if(contador4>=8 && contador4<15){
    console.log("Al aplicar el descuento del 10% el total a pagar es de "+pfinal1*0.9)
    
}else if (contador4>=15 && contador4<25){
    console.log("Al aplicar el descuento del 15% el total a pagar es de "+pfinal1*0.85)
}else if(contador4>=25) 
console.log("Al aplicar el descuento del 20% el total a pagar es de "+pfinal1*0.8)


console.log("Punto 5")

//Diseñe un ciclo while cuyo límite es la cantidad de notas que el docente requiera digitar. Solicite una a una las notas y verifique si el estudiante perdió o no la asignatura (lleve conteo de ambos). Al finalizar el ciclo, si el número de estudiantes reprobados es igual o mayor que los aprobados, debe mostrar un mensaje que diga “Debe abrirse el curso de verano”, sino, “La cantidad de estudiantes no es suficiente para curso de verano”.

var Notas=prompt("ingrese la cantidad de notas que requiera digitar")
var acu=0;
var guardNotas=0
var aprobados=0;
var reprobados=0;

while(acu<Notas){
    var Pregunta=parseFloat(prompt("Ingrese las notas una a una"));
    guardNotas+=Pregunta;
    acu++
    
    if(Pregunta<3.5){
        console.log("Reprobaste sacaste "+ Pregunta)
        reprobados++
    }
    else console.log ("Aprobaste sacaste "+Pregunta)
    aprobados++
}  

var NotasTotal=guardNotas/Notas
if(NotasTotal<3.5){
    console.log("Debe de abrir el curso de verano")
}else console.log("La cantidad de estudiantes no es suficiente para el curso de verano")

