//1
var saludar="si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}
//2
var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}
//3
var edad=18;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}
//4
var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2-numero1) {
  console.log("numero2 es positivo");
}
if(numero1-numero2) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
//5-8
var numerito = 50;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito >= 50 & numerito <= 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito > 80 & numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
//punto 9
var DiaPoli="miercoles";
var PoliDeportivo;
 
if(DiaPoli == "lunes" || DiaPoli == "martes"){
    PoliDeportivo="No pueden asistir al Poli Deportivo";
}else if(DiaPoli == "miercoles"){
    PoliDeportivo="No pueden asistir al Poli Deportivo";
}else if(DiaPoli == "jueves"){
    PoliDeportivo="Pueden ir al Poli Deportivo"
}else{
    PoliDeportivo="No pueden asistir al Poli Deportivo";
}
 
console.log("Este dia " +PoliDeportivo);
//10
var Numero1=20
var Numero2=1;
var operacion="division"

 
if(operacion == "division"){
    console.log(Numero1/Numero2);

//11
var Dia="miercoles";
var Almuerzo;

if(Dia == "lunes"){
  Almuerzo="Arroz con pollo";
}else if(Dia == "martes"){
  Almuerzo="Chuleta de Cerdo/Pollo";
}else if(Dia == "miercoles"){
  Almuerzo="Fríjoles"
}else if(Dia =="jueves"){
  Almuerzo="Sancocho de Pescado";
}else if(Dia =="viernes"){
  Almuerzo="Bandeja Paisa";
}else if(Dia =="sabado"){
  Almuerzo="Ajiaco";
}else if(Dia =="domingo"){
  Almuerzo="Sancocho de Gallina"; 
}
console.log("El almuerzo del dia es " +Almuerzo);}

//12

var operacion
operacion=

 
if(operacion == "a"||operacion=="e"||operacion=="i"||operacion=="o"||operacion=="u"){
    console.log("vocal");
}else if(operacion ==1||operacion==2||operacion==3||operacion==4||operacion==5||operacion==6||operacion==7||operacion==8||operacion==9||operacion==0){
   console.log("número");}
else{console.log("Es una consonate")}

