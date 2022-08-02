// console.log("Punto 1")

function suma(n1,n2,n3,n4){
    var resultado = n1+ n2 +n3+n4
    return resultado
}
function resta(n1,n2){
    var resultado = n1- n2
    return resultado
}
function Multiplicacion(n1,n2){
    var resultado = n1 * n2
    return resultado
}
function Division(n1,n2){
    var resultado = n1 / n2
    return resultado
}
function Potencia(n1,n2){
    var resultado = n1 ** n2
    return resultado
}

//  console.log("Punto 2")

    function main_geometria(){

        var menu=prompt("Que desea hacer?\n 1. Hallar el area de una figura \n 2.Hallar Perímetro de una figura")

       menuFigura=parseFloat(prompt("Escoja una figura\n 1. Triangulo\n 2. Paralelograma"))


        if(menu==1&&menuFigura==1){
            var BaseTri=parseFloat(prompt("Ingrese la base"))
            var altura=parseFloat(prompt("Ingrese la altura"))

            console.log(Multiplicacion(BaseTri,altura/2))
        }else if(menu==2&&menuFigura==1){
            var ladoT1=parseFloat(prompt("Ingrese el primer lado del Triangulo"))
            var ladoT2=parseFloat(prompt("Ingrese el segundo lado del Triangulo"))
            var ladoT3=parseFloat(prompt("Ingrese un tercer del Triangulo"))
            console.log(suma(ladoT1,ladoT2,ladoT3,0))
        }else if(menu==1&&menuFigura==2){
            var BasePar=parseFloat(prompt("Ingrese la base"))
            var alturaPar=parseFloat(prompt("Ingrese la altura"))
            console.log(Multiplicacion(BasePar,alturaPar))
        }else if(menu==2&&menuFigura==2){
            var ladoPara1=parseFloat(prompt("Ingrese el primer lado del Paralelograma"))
            var ladoPara2=parseFloat(prompt("Ingrese el segundo lado del Paralelograma"))
            var ladoPara3=parseFloat(prompt("Ingrese un tercer lado del Paralelograma"))
            var ladoPara4=parseFloat(prompt("Ingrese un cuarto lado del Paralelograma"))
            console.log(suma(ladoPara1,ladoPara2,ladoPara3,ladoPara4))
        }
    }