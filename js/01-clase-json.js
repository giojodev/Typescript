var bicicleta= {
    color:'rojo',
    modelo:'BMX',
    frenos:'Disco',
    velocidadMaxima:'60km',
    cambiarColor:function (nuevoColor) {
        this.color=nuevoColor;
        console.log(this);z
      }
}

bicicleta.cambiarColor("Verde");
