export class GameSimon {
  secuencia = [];

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

  pulsar(gato) {
    if (!this.UI.isBusy()) {
      console.log("Has pulsado el gato " + gato);
      console.log(gato.tecla);
    }
  }
}
