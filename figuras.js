var lado, base, altura, radio, opcion, resultado;
const PI=3.14156;
opcion = parseInt(prompt("seleccione el tipo de figura al que se le quiere encontrar el area: 1. cuadrado 2. triangulo 3. circulo"));
switch (opcion) {
    case 1:
        lado = parseInt(prompt("ingrese el valor del lado en cm"));
        resultado= lado*lado 
        alert("el area del cuadrado es igual a"+resultado + "centimetros cuadrados ")
        break;
    case 2:
        base= parseInt(prompt("ingrese el valor de la base en cm"));
        altura= parseInt(prompt("ngrese el valor de la altura en cm"));
        resultado= (base*altura)/2;
        alert("el area del trianglo es igual a"+resultado+ "centimetros cuadrados")
        break;
    case 3:
        radio= parseInt(prompt("ingrese l valor del radio en cm"));
        resultado = radio*radio*PI;
        alert("el area del circulo es igual a" +resultado+ "centimetros cuadrados")
        break;

    default:
        alert("la opcion escogida no es valida")
        break;    
        

}
/* codigo para encontrar areas de figuras*/
