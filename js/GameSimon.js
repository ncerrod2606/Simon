export class GameSimon {
  secuencia = [];
  userSecuencia = [];
  secuencia2 = [];

  constructor(UI) {
    this.UI = UI;
    this.UI.setAccion(this.pulsar.bind(this)); //Evita problemas de contexto y asi uso pulsar de esta clase
  }

  introducirSecuencia() {
    this.userSecuencia = [];
    const numero = Math.floor(Math.random() * 4);
    this.secuencia.push(numero); // Añade el número generado a la secuencia
    this.UI.setList(this.secuencia);
    this.UI.play();
  }

  restartSecuencia() {
    this.secuencia = [];
    this.userSecuencia = [];
    const numero = Math.floor(Math.random() * 4);
    this.secuencia.push(numero); // Añade el número generado a la secuencia
    this.UI.setList(this.secuencia);
    this.UI.play();
  }

  start() {
    this.UI.start(this.introducirSecuencia.bind(this)); // Llamo a la funcion de start hecha en UI
  }

  restart() {
    this.UI.restart(this.restartSecuencia.bind(this)); // Llamo a la funcion de restart hecha en UI
  }

  pulsar(boton) {
    if (!this.UI.isBusy()) {
      console.log("Has pulsado el boton " + boton);
      console.log(boton.tecla);
      this.userSecuencia.push(boton.tecla); // Almaceno la tecla pulsada
      console.log(this.userSecuencia);
      console.log(this.secuencia);
      this.compararSecuencias();
    }
  }

  compararSecuencias() {
    // Creo copias de los arrays para que los originales no se modifiquen
    const secuenciaUsuario = [...this.userSecuencia];
    let i = 0;

    // Aqui comparo las secuencias elemento a elemento sacando el primer elemento de cada una
    while (secuenciaUsuario.length > 0) {
      const itemJuego = this.secuencia[i];
      const itemUsuario = secuenciaUsuario.shift();

      if (itemJuego !== itemUsuario) {
        this.UI.changeStatus("Game Over"); // Si hay algun numero que no coincide muestra que ha perdido y sale de la funcion por lo que no sigue a la siguiente ronda
        return;
      }
      i++;
    }

    // Si no hay ningun fallo al final compara las longitudes y lo guardo en una variable
    const rondaCompleta = this.userSecuencia.length === this.secuencia.length;

    if (rondaCompleta) {
      // Si las longitudes son iguales el usuario ha completado la ronda y introduce la siguiente secuencia
      this.UI.changeStatus("Round Complete");
      setTimeout(() => this.introducirSecuencia(), 500);
    } else {
      this.UI.changeStatus("Good So Far"); // Si las longitudes aun no son iguales pero no hay ningun error le indica al usuario que va bien
    }
  }
}
