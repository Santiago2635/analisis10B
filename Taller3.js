//Una manguera arroja 145 litros de agua en una hora. Dada la cantidad de litros de agua que caben en una piscina,
//retorne el tiempo en horas que tarda en llenarse con el agua de la manguera.
var LitrosAgua
LitrosAgua=prompt("Ingrese la cantidad de litros de agua que le caben a su piscina");
var tiempo
tiempo=(LitrosAgua/145)
console.log("Calculando la cantidad de litros de su piscina el tiempo estimado es de "+tiempo+" hora");
//Dada una longitud en metros, conviértala en milímetros.
metros=prompt("Ingrese la cantidad de metros que quiere cambiar a milimetros");
milimetros=metros/1000
console.log("La cantidad de "+metros+"m a milimetros es de "+milimetros+"mm");
//Convierta el resultado del punto anterior en decímetros.
var decimetros
decimetros=milimetros/100
console.log("La cantidad de "+milimetros+"mm a decimetros es de "+decimetros+"dm");
//Convierta el resultado en decímetros del punto anterior a kilómetros.
var kilometros
kilometros=decimetros/10000
console.log("La cantidad es de "+decimetros+"dm a kilometros es de "+kilometros+"km");
//El minuto de una llamada telefónica cuesta 120 pesos. 
//Dada una duración de llamada en horas, calcule qué costo tiene la llamada.
var duracionH
duracionH=prompt("Ingrese la cantidad de horas que ha estado en llamada");
TotalH=duracionH*7200
console.log("La cantidad de tiempo que lleva es de "+duracionH+" horas entonces la cantidad a pagar es de "+TotalH+" pesos");
/*Un profesor de música requiere un algoritmo que le ayude a calcular rápidamente cuánto debe cobrar por cada clase. 
La manera en que cobra es la siguiente. La primera hora cuesta $40.000, cada hora adicional cuesta $25.000. 
Dado el número de horas que duró la clase, retorne el total a cobrar por el alumno. 
(cada hora se cobra a partir del primer minuto, es decir, la cantidad de horas es un número entero)
*/
var claseH
claseH=prompt("Digite la cantidad de horas que duro la clase");
TotalCh=(claseH-1)*25000+40000
console.log("La cantidad de horas que lleva es de "+claseH+" por lo cual el total a pagar es de "+TotalCh);