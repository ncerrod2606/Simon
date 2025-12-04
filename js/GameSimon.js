export class GameSimon {
  secuencia = [];
  userSecuencia = [];

  constructor(UI) {
    this.UI = UI;
    this.UI.setAccion(this.pulsar.bind(this));
  }

  introducirSecuencia() {
    const numero = Math.floor(Math.random() * 4);
    this.secuencia.push(numero);
    this.UI.setList(this.secuencia);
    this.UI.play();
  }

  start() {
    this.introducirSecuencia();
  }

  pulsar(boton) {
    if (!this.UI.isBusy()) {
      console.log("Has pulsado el boton " + boton);
      console.log(boton.tecla);
      this.userSecuencia.push(boton.tecla);
      console.log(this.userSecuencia);
      console.log(this.secuencia);
      this.compararSecuencias();
    }
  }

  compararSecuencias() {
    if (this.secuencia.length == this.userSecuencia.length) {
      if (this.secuencia.shift() === this.userSecuencia.shift()) {
        console.log("Has ganado");
        this.UI.busy = true;
        this.introducirSecuencia();
      } else {
        console.log("Has perdido");
      }
    } else {
      console.log("Te has pasado de longitud");
    }
  }
}
