/*
1 Suma
2 Resta
3 Multiplicacion
4 Division
5 Potencia
*/
function suma(n1,n2){
    var resultado = n1+ n2
    var mensaje = "El total de sumar "+n1+" y "+n2+" es igual a "+resultado;
    return resultado
}function resta(n1,n2){
    var resultado = n1- n2
    var mensaje = "La resta entre "+n1+" y "+n2+" es igual a "+resultado;
    return resultado
}function Multiplicacion(n1,n2){
    var resultado = n1 * n2
    var mensaje = "La multiplicacion entre "+n1+" y "+n2+" es igual a " +resultado;
    return resultado
}function Division(n1,n2){
    var resultado = n1 / n2
    var mensaje = "La division entre "+n1+" y "+n2+" es igual a "+resultado;
    return resultado
}function Potencia(n1,n2){
    var resultado = n1 ** n2
    var mensaje = "La potencia entre "+n1+" y "+n2+" es igual a "+resultado;
    return resultado
}function DobleSuma(n1,n2){
    var resultado = n1 + n2 * 2
    var mensaje = "La sumas entre "+n1+" y "+n2+" y multiplicado por 2 es de "+resultado;
    return resultado
}function MitadPotencia(n1,n2){
    var resultado = n1 ** n2 / 2
    var mensaje = "La potencia entre "+n1+" y "+n2+" Dividido 2 es "+resultado;
    return resultado
}function Potencia(n1,n2){
    var resultado = n1 * n2 + 3
    var mensaje = "La Multiplicacion entre "+n1+" y "+n2+" sumandole 3 es de "+resultado;
    return resultado
}



function main_calculadora(){
    var menu = prompt("Que operacion desea hacer (¿Digite el numero?)\n 1. Suma \n 2.Resta\n 3. Multiplicacion\n 4.Division\n 5. Potencia\n 6.Doble de la suma\n 7. Mitad de potencia\n 8. Producto mas 3")

    var numero1=parseFloat(prompt("Ingrese el primer valor"));
    var numero2=parseFloat(prompt("Ingrese el segundo digito"));

    if(menu==1){
        console.log(suma(numero1,numero2))
    }else if(menu==2){
        console.log(resta(numero1,numero2))
    }else if(menu==3){
        console.log(Multiplicacion(numero1,numero2))
    }else if(menu==4){
        console.log(Division(numero1,numero2))
    }else if(menu==5){
        console.log(Potencia(numero1,numero2))
    }else if(menu==6){
        var sumaNumeros= suma(numero1,numero2);
        console.log(Multiplicacion(sumaNumeros,2))
    }else if(menu==7){
        var PotenciaNumeros= Potencia(numero1,numero2);
        console.log(Division(PotenciaNumeros,2))
    }else if(menu==8){
        var multiplicacionNumeros= Multiplicacion(numero1,numero2);
        console.log(suma(multiplicacionNumeros,3))
    }
}