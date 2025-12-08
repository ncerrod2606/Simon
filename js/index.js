import { UI } from "./UI.js";
import { GameSimon } from "./GameSimon.js";

// Como hemos hecho en clase creamos un objeto de configuración con el comportamiento de la interfaz.
UI.init(
  [
    {  //Establezco la tecla para identificar cada boton para la logica del juego con la propiedad tecla
      id: "pulsador1",
      tecla: 0,
      colorOn: "red",
      colorOff: "lightcoral",
    },
    {
      id: "pulsador2",
      tecla: 1,
      colorOn: "blue",
      colorOff: "lightblue",
    },
    {
      id: "pulsador3",
      tecla: 2,
      colorOn: "green",
      colorOff: "lightgreen",
    },
    {
      id: "pulsador4",
      tecla: 3, 
      colorOn: "yellow",
      colorOff: "lightyellow",
    },
  ],
  { result: "result" }, // Establezco que id va a coger del DOM para mostrar el resultado
  { btn: "btn" }, // Establezco que id va a coger del DOM para el boton de inicio de partida
  { btnrestart: "btn-restart" }
);

// Al juego le paso la interfaz y manejara de manera separada la logica de la interfaz

const game = new GameSimon(UI);

game.start();
game.restart();
