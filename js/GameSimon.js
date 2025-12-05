export class GameSimon {
  secuencia = [];
  userSecuencia = [];
  secuencia2 = []; 

  constructor(UI) {
    this.UI = UI;
    this.UI.setAccion(this.pulsar.bind(this));
  }

  introducirSecuencia() {
    this.userSecuencia=[];
    const numero = Math.floor(Math.random() * 4);
    this.secuencia.push(numero);
    this.secuencia2.push(numero);
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

    let secuenciaCopia = [...this.secuencia];
    let userCopia = [...this.userSecuencia];

    let correcto = true;
    
    if (this.secuencia.length == this.userSecuencia.length) {
      if (this.secuenciaCopia === this.userCopia) {
        console.log("Has ganado");
        this.UI.busy = true;

        setTimeout(() => this.introducirSecuencia(), 500);
      } else {
        console.log("Has perdido");
      }
    } else {
      console.log("Te has pasado de longitud");
    }
  }
}
