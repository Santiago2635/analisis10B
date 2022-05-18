console.log("Punto 1")

var contadorWhile = 0;
 
while(contadorWhile < 5){
    console.log(2);
    contadorWhile += 1;
}

console.log("Punto 2")

var contadorWhile1 = 0;
 
while(contadorWhile1 < 8){
    console.log(contadorWhile1);
    contadorWhile1 += 1;
}

console.log("Punto 3")

var contadorWhile2 = 0;
 
while(contadorWhile2 < 20){
    console.log(contadorWhile2);
    contadorWhile2 += 2;
}

console.log("Punto 4")

var contadorWhile4 = "Seguir";
 
while(contadorWhile4 !="ok"){
    contadorWhile4 = prompt("Ingrese ok para parar");
    console.log("Dijo "+contadorWhile4)
}

console.log("Punto 5")

var contadorWhile5 =0;
 
while(contadorWhile5 >= 0){
    contadorWhile5 = prompt("Ingrese un numero negativo");
    console.log(contadorWhile5)
}

console.log("Punto 6")
var resultado6=0;
var contadorWhile61;
var contadorWhile62;
while(resultado6<=20){
    contadorWhile61=parseInt(prompt("valor 1"));
    contadorWhile62=parseInt(prompt("valor 2"));
    resultado6=contadorWhile61+contadorWhile62;
    console.log("La suma es "+resultado6)
    }
// Intentos limitados
    console.log("Punto 7")

var contraseña="2635";
var intento=prompt("Ingrese su contraseña");
var numIntento=1;
while((intento!=contraseña) && (numIntento=4)){
console.log("La contraseña es incorrecta")
intento=prompt("Ingrese una contraseña nueva")
numIntento+=1
}
if(numIntento=4){
    console.log("Intentos agotados")
}else{
    console.log("contraseña correcta")
}
console.log("contraseña correcta");
// Intentos Ilimitados
console.log("Punto 7.1")

var contraseña="2635";
var intento=prompt("Ingrese su contraseña");

while(intento!=contraseña){
console.log("La contraseña es incorrecta")
intento=prompt("Ingrese una contraseña nueva")

}
console.log("contraseña correcta");