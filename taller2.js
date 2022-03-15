/*1)En código JavaScript, solicite lo necesario al usuario para hallar el área de un cuadrado 
y volumen de un cubo, realice las operaciones y muestre el resultado diciendo qué medidas tiene la figura 
y cuál es el área del cuadrado y el volumen del cubo.*/
console.log("Solucion Punto 1");
var ladocuadrado=prompt("Por favor ingrese la medida del lado para hallar el área del cuadrado y el volumen del cubo");
var areacuadrado=ladocuadrado**2;
console.log("el lado del cuadrado equivale a "+ladocuadrado+" por lo tanto el area del cuadrado es "+areacuadrado);
var volumencubo=ladocuadrado**3;
console.log("el volumen del cubo es "+volumencubo );
//Dada la longitud de la base y el lado de un rectángulo, halle el área y su perímetro.
console.log("Solucion punto 2");
var ladorectangulo=prompt("Por favor ingrese el lado del rectangulo");
var arearectangulo=ladorectangulo**2
console.log("el area del rectangulo es "+arearectangulo);
var baserectangulo=prompt("Por favor ingrese la base del rectangulo");
var perimetrorectangulo=(ladorectangulo*2)+(baserectangulo*2);
console.log("el perimetro del rectangulo es "+perimetrorectangulo);
//Dado el diámetro halle el área de un círculo y el volumen de la esfera. 
//(Escriba Math.PI para utilizar un valor más exacto de PI) ejemplo: valor = 2*Math.PI;
console.log("solucion punto 3");
var diametro=prompt("Ingrese el diametro del circulo para hallar el area del circulo y el volumen de la esfera");
valor=2*Math.PI;
var areacirculo=(1/4*Math.PI)*diametro
console.log("El area de el circulo es "+areacirculo);
var radioCirculo=diametro/2;
VolumenEsfera=(4/3*Math.PI)*(radioCirculo**3);
console.log("El volumen de la esfera es "+VolumenEsfera);
//Cree las variables base1, base2 y h. Solicite el valor de ellas al usuario y halle el área de un trapezoide.
console.log("Solucion punto 4");
var base1=prompt("Ingrese el valor de la base 1 del trapezoide");
var base2=prompt("Ingrese el valor de la base 2 del trapezoide");
var altura=prompt("Ingrese la altura del trapezoide");
var aretrape=(base1)*(base2)*altura;
console.log("El area del trapezoide es "+aretrape);
//Dadas las medidas de ancho, largo y profundo de una piscina, calcule con cuántos litros de agua se llenaría.
console.log("Solucion punto 5")
var anchopis=prompt("Digite el ancho de la piscina");
var largopis=prompt("Digite el largo de la piscina");
var profundidadpis=prompt("Digite la profundidad de la piscina");
var metrospis=(anchopis)*(largopis)*profundidadpis;
var litrospis=metrospis*1000
console.log("La cantidad de litros que debe de tener la piscina es de "+litrospis+" litros")
//Se desea conocer el total a pagar por pintar la fachada de una vivienda,
// dado el alto y ancho del muro, cuánto se le debe pagar al pintor que cobra $22.000 por m2.
var altocasa=prompt("Digite la altura de su casa");
var anchocasa=prompt("Digite el ancho de su casa");
var cobroalto=altocasa*22000
var cobroancho=anchocasa*22000
var cobrototal=cobroalto+cobroancho
console.log("Sabiendo que el ancho de su muro es "+anchocasa+"m2 cobrara "+cobroancho+" y la altura es "+ altocasa+"m2 cobrara "+cobroalto+" el total a pagar es de "+cobrototal);
/*
Convierta las siguientes unidades:
a) Dada una longitud de centímetros, retorne su equivalencia en kilómetros.
b) Dado un volumen en decilitros, dé su equivalente en litro.
c) Dada una masa de microgramos, retorne el equivalente en gramos.
d) Dada una distancia en kilómetros, represéntela en milímetros.
*/
console.log("Solucion punto 7a");
var centimetros=prompt("Digite los centimetros para dar la equivalencia en kilometros");
var kilometros=centimetros*1e-5
console.log(centimetros+"cm equilave a "+kilometros+"km")
console.log("Solucion punto 7b");
var decilitro=prompt("Ingrese la cantidad de decilitros que quiuere cambiar a litros");
var litros=decilitro/10
console.log("los decilitros equivalen a "+litros)+"l";
console.log("Solucion punto 7c");
var microgramo=prompt("Ingrese la cantidad de microgramos que quiere cambiar a gramos");
var gramo=microgramo/1000000
console.log("La cantidad de de gramos es "+gramo+"gr");
console.log("solucion punto 7d");
var kilometros=prompt("Ingrese la cantidad de kilometros que quiere pasar a milimetros");
var milimetros=kilometros*1000000
console.log("la cantidad de milimetros es "+ milimetros+"mm")


