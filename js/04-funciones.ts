/*
En TS es posible definir los tipos de datos que recibira
una funcion tanto en los parametros como el tipo de dato
que arrojara como retorno, colocandolo luego del parentesis
de los parametros, en este caso retorna un string
*/
function getNumero(numero:number):string{
return "El numero es: "+numero;
}

console.log(getNumero(12));