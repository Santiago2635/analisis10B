console.log("Hola");
function Saludo(){
    console.log("¿Que tal?")
}
//Llamar la funcion 
Saludo();

function Suma (){
    var numero1 =2;
    var numero2 =4;
    console.log(numero1+numero2);

}
Suma();

function Sumita (){
    var numerito=10;
    var numerito1=22;
    return numerito+numerito1
}
console.log(Sumita());

//Funciones con parametros

function sumar(num1,num2){
    return num1+num2;
}

function main(){
    var numero11=parseFloat(prompt("Ingrese el primer numero"));
    var numero12=parseFloat(prompt("Ingrese el segundo numero"));
    console.log(sumar(numero11,numero12))
}
