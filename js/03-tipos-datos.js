//String
//Es posible que una variable reciba mas de un tipo de dato
//Esto utilizando | para indicar un tipo de dato secundario
var cadena = "GIOVANNI";
cadena = 12;
//Number
var numero = 123;
//Booleano
var verdadero_falso = true;
//Any
var cualquier = "Hola";
//Arrays
var lenguajes = ["PHP", "JS", "CSS", 123, true];
var years = [12, 13, 14];
//Let vs Var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena);
console.log(numero);
console.log(verdadero_falso);
console.log(cualquier, lenguajes, years);
