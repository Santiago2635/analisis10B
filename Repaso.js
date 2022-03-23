//1re Punto
var metros;
metros=prompt("Por favor ingrese el valor en metros");
kilometros=metros/1000;
console.log(metros+"m equivale a "+kilometros+"km");
//2do Punto
var distancia;
distancia=prompt("Ingrese la distancia que va a recorrer el avion");
var litrosG
litrosG=(distancia/100)*290;
console.log("La distacia que recorre el avion es de "+distancia+"km entoces los litros de gasolina que gasta es de "+litrosG+" litros");
//3er Punto
var kilolitros
kilolitros=litrosG/1000
console.log("La cantidad de kilolitros que consumira el avion es de "+kilolitros);
//4to punto
var diametrocir=prompt("Ingrese el diametro de el circulo");
var radiocir=diametrocir/2
var areacir=(radiocir**2)*Math.PI
var volumenCir=