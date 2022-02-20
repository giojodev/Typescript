//Interface
/*
An interface is a syntactical contract that an entity
 should conform to. In other words, an interface defines
  the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which 
are the members of the interface. Interfaces contain only
the declaration of the members. It is the responsibility
of the deriving class to define the members. It often
helps in providing a standard structure that the 
deriving classes would follow.
*/
interface CamisetaBase{
    setColor(color):any;
    getColor():any;
}


//DECORADOR
function estampar(logo:string){
  return function (target:Function){
    target.prototype.estampacion=function():void{
          console.log("Camiseta estampada con logo de: "+logo);
    }
  }
}
//Clase (molde)
//Para utilizar esta clase en cualquier otro archivo
//es necesario usar la palabra reservada export antes de
//la declaracion de la clase
/*export*/
@estampar('Adidas')
class Camiseta implements CamisetaBase {
  //Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //Metodos (funciones o acciones del objeto)
  constructor(color:string, modelo:string, marca:string, talla:string, precio:number) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }

  public setColor(color:string) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }
}

//Clase Hija - Herencia
//Para activar la herencia se usa la palabra reservada extends
class Sudadera extends Camiseta {
    public capucha:boolean;

    setCapucha(capucha:boolean){
        this.capucha=capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta=new Camiseta("Rojo","Manga Corta","Adidas","L",120);
console.log(camiseta);

var sudaderaNike=new Sudadera("Azul","Manga Corta","Polo","L",110);
sudaderaNike.setCapucha(true);
console.log(sudaderaNike);
camiseta.estampacion();
// // camiseta.setColor("Rojo")

// var playera=new Camiseta("Verde","Manga Larga","Polo","L",110);
// // playera.setColor("Azul");

// console.log(camiseta,playera.getColor());
