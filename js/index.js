import { UI } from "./UI.js";
import { GameSimon } from "./GameSimon.js";

// Como hemos hecho en clase creamos un objeto de configuración con el comportamiento de la interfaz.
UI.init(
    [
        {
            id: "pulsador1",
            tecla: 0,
            colorOn: "red",
            colorOff: "lightcoral"
        },
        {
            id: "pulsador2",
            tecla: 1,
            colorOn: "blue",
            colorOff: "lightblue"
        },
        {
            id: "pulsador3",
            tecla: 2,
            colorOn: "green",
            colorOff: "lightgreen"     
        },
        {
            id: "pulsador4",
            tecla: 3,
            colorOn: "yellow",
            colorOff: "lightyellow"     
        }
    ]
);


const game= new GameSimon(UI);

game.start();
