//Punto 1
console.log("Punto 1")
var ValorVariable= 200;
 
if (ValorVariable < 300){
   console.log("La condición es verdadera")
}

//punto 2
console.log("Punto 2")
var valor=4;
 
if (valor >= 60 || valor <= 10){
   console.log("El valor es correcto")
}

//punto 3
console.log("Punto 3")
var numero=40;
 
if (numero==20){
   console.log('El número es igual que "20" en valor y tipo');
}else if(numero>30 & numero<40){
    console.log('El número es mayor que 30 y menor a 40');
}else if(numero==30 || numero<=29){
    console.log("El número es igual que 30 o menor igual que 29");
}else if(numero>=40){
    console.log("El número es mayor igual que 40");
   
}
//Respuesta 3.A
numero="20"
//Respuesta 3.B
    numero="31 al 39 "
//Respuesta 3.C
    numero="30 o menor que 29"
//Respuesta 3.D
    numero="40 o numeros mayores "

//punto 4
console.log("Punto 4")
var Numero1=20
var Numero2=15;
var operacion="multiplicacion"

 
if(operacion == "suma"){
    console.log(Numero1+Numero2);
}else if(operacion == "resta"){
   console.log(Numero1-Numero2);
}else if(operacion == "multiplicacion"){
   console.log(Numero1*Numero2);
}


//punto 5
console.log("Punto 5")

var Producto="Churro";
var Precio;

if( Producto=="Sandwich"){
   console.log("El precio de "+Producto +" es $2500");
}else if(Producto=="Churro"){
   console.log("El precio de "+Producto +" es $2000");
}else if( Producto=="Salchipapa"){
   console.log("El precio de "+Producto +" es $2800");
}else if(Producto=="Empanada"){
   console.log("El precio de "+Producto +" es $1000");
}else{
   console.log("No tenemos este producto");
}

//punto 6
console.log("Punto 6")

var celebracion="Celebración de Boda";
var numpersonas=18;
var Precio;

if( celebracion=="Celebración de Boda"){
   console.log("El precio de "+celebracion +" es $150.000 y el costo de los platos es "+numpersonas*25000 );
}else if(celebracion=="Cumpleaños adultos"){
   console.log("El precio de "+celebracion +" es $65.000 y el costo de los platos es "+numpersonas*25000);
}else if( celebracion=="Cumpleaños niños"){
   console.log("El precio de "+celebracion +" es $95.000 y el costo de los platos es "+numpersonas*25000);
}else if(celebracion=="Cena romántica"){
   console.log("El precio de "+celebracion +" es $45.000 y el costo de los platos es "+numpersonas*25000);
}else{
   console.log("No ofrecemos ese tipo de celebracion");
}
