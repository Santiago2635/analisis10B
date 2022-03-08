console.log("Hola Mundo");//imprimir por console
//comentario en linea
/*comentario
en
varias
lineas
o
multilinea

*/
/*Variables: Son datos de memoria que almacenan informacion 
existen varios tipos de variables en js, pero generalmente se utilizan
los siguientes: 

String: Almacena cadenas de texto. Se debe declarar o asignar el
valor entre comillas ""

Int: Almacena numeros enteros

Double: Almacena numeros reales

Boolean: Almacena valores de verdad (True or False)
*/

/*Declarar Variables
Declarar una variable es crearla, decirle al lenguaje como se llama la variable e indicarle que ya existe.

Para declarar una variable se puede utilizar ya sea la palabra reservada
var o let
*/
var nombre;
console.log(nombre);
/*Inicializar variables
Es necesario asignar un valor cuando se crea esta variable 
*/
var apellido="Mendoza"
console.log(apellido);
/*
Asignar un valor: Se hace mediante el signo "=" se debe hacer sobre una
variable que ya fue declarada  
*/
nombre="Santiago";
console.log(nombre+" "+apellido)

//Desde Otra Variable 
var edad = 15;
var edadEstudiante = edad;
// Desde el Teclado
var gradoEstudiante=prompt("Ingrese un grado");
console.log("El grado es: "+gradoEstudiante);
/* Constantes: Son valores que una vez inicializados no pueden cambiar lo que almacena. Se crea con la palabra reservada const, el nombre de las constantes se escribe todo en mayuculas para diferenciarlo de las variables
variables
*/
const PI=3.1516;
//PI=5;
//Imprimir por consola
//Simple
console.log("mensaje");
console.log(nombre);
//concaenado
console.log("La edad es "+edad+" años");

//Operadores
//Suma
var suma;
suma = 5+3;
console.log(suma)
suma = 5+3;
let a = 10;
suma+a;
suma = a+8;
console.log(suma);
let b=20;
suma = a+b;
console.log(suma);

//Resta
var resultado;
resultado=a-b;
console.log (resultado)
resultado= b-a;
console.log(resultado);
//multiplicacion
var producto
producto = a*b;
console.log(producto);
//division
var division
division = b/a;
console.log(division);
//orden de opereaciones
var res;
res = a*2;
console.log(res);
res = a*2-1;
console.log(res);
res = a*(2-1);
console.log(res);
//residuo
residuo = 12%2; //0
console.log(residuo);
//Incremento (+)
var incre = 1;
console.log(incre);
incre = incre+1
console.log(incre);
incre += 1;
console.log(incre);
incre++;
console.log(incre);
//Decremento (-)
var decre = 1;
console.log(decre);
decre = decre-1
console.log(decre);
decre -= 1;
console.log(decre);
decre--;
console.log(decre);
//operaciones aumentadas
/*Son operaciones que se le realizan a una variable y el resultado se guarda
en si misma; debe tener un valor antes de realizar la operacion 
*/
var sumaAumento=0;
sumaAumento +=1;
sumaAumento +=48;
console.log(sumaAumento);
var restaAumento=100;
restaAumento -=1;
restaAumento -=49;
console.log(restaAumento);
//multiplicacion
var productoAumento=100;
productoAumento *=1;
productoAumento *=49;
console.log(productoAumento);
//division
var DivisionAumento=1;
DivisionAumento /=1;
DivisionAumento /=2;
console.log(DivisionAumento);
//potencia
var exp=3**2;
console.log(exp);
exp=3**3;
console.log(exp);
//cadenas o texto
//suma de cadenas
var nombre= "Santiago";
var apellido= "Mendoza";
var nomCompleto= nombre+" "+apellido;
console.log(nomCompleto);
var cadenita1="3";
var cadenita2="5";
var cadenatotal=cadenita1+cadenita2;
console.log(cadenatotal);
//.length
//Permite conocer la longitud de una cadena o el tamaño de un vector 
console.log(nomCompleto.length);
console.log(nombre[0])//S
//Para encontrar el caracter en la ultima poscision de una cadena o un vector se debe buscar la longitud 
//menos 1 (.length-1)
console.log(nombre.length-1);