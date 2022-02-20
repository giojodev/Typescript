//Crear tipo de dato Personalizado usando la palabra reservada type
//Luego este tipo de dato puede ser utilizado en el codigo
type alfanumerico=string|number;

//String
//Es posible que una variable reciba mas de un tipo de dato
//Esto utilizando | para indicar un tipo de dato secundario
let cadena:alfanumerico="GIOVANNI";
cadena=12;

//Number
let numero:number=123;

//Booleano
let verdadero_falso:boolean=true;

//Any
let cualquier:any="Hola";

//Arrays
var lenguajes:Array<any>=["PHP","JS","CSS",123,true];
let years:number[]=[12,13,14];

//Let vs Var
var numero1=10;
var numero2=12;
if(numero1==10){
    let numero1=44;
    var numero2=55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);

console.log(cadena);
console.log(numero);
console.log(verdadero_falso);
console.log(cualquier, lenguajes,years);