export const UI = {
  status: {
    ON: 1,
    OFF: 0,
  },

  listButtons: [],
  list: [],
  busy: false,
  accion: null,
  result: null,
  btn: null,
  btnrestart: null,

  init(configButtons, domControl, domBtn, domBtnRestart) {
    UI.listButtons = configButtons;
    UI.result = document.getElementById(domControl.result); // Aqui asigno el elemento del DOM al ojeto que le pase en UI
    UI.btn = document.getElementById(domBtn.btn); // Aqui hago lo mismo pero para el boton
    UI.btnrestart = document.getElementById(domBtnRestart.btnrestart); // Aqui hago lo mismo pero para el boton de reinicio
    UI.listButtons.forEach((item) => {
      item.id = document.getElementById(item.id);
      item.id.addEventListener("click", () => { // Aqui le cambio el color al pulsar cada tecla y lo cambio con change 2 para que no se espere y lo vea el usuario como un click
        UI.change2(item, UI.status.ON);
        setTimeout(() => { //Se lo aplico solo para que el click sea inmediato pero al apagarse tarde como un click normal
          UI.change2(item, UI.status.OFF);
          UI.accion(item);
        }, 500);
      });
    });
  },

  setResult: (result) => {
    UI.result.innerHTML = result;
  },

  changeStatus(newStatus) {
    UI.result.textContent = newStatus;
  },

  setAccion: (accion) => {
    UI.accion = accion;
  },

  setList: (list) => {
    UI.list = list;
  },

  isBusy: () => {
    return UI.busy;
  },

  play: async () => {
    UI.busy = true;
    console.log(UI.busy);
    for (let item of UI.list) {
      await UI.change(UI.listButtons[item], UI.status.ON);
      await UI.change(UI.listButtons[item], UI.status.OFF);
    }
    UI.busy = false;
    console.log(UI.busy);
  },

  start(introducirSecuencia) {
    btn.addEventListener("click", () => introducirSecuencia()); // Para iniciar el juego con la primera secuencia
  },

  restart(restartSecuencia) {
    this.btnrestart.addEventListener("click", () => restartSecuencia()); // Para iniciar el juego con la primera secuencia
  },


  change: (element, status) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.id.style.backgroundColor =
          status === UI.status.ON ? element.colorOn : element.colorOff;
        resolve(true);
      }, 1000);
    });
  },

  //Cambio de color sin espera para los clicks
  change2: (element, status) => {
    element.id.style.backgroundColor =
      status === UI.status.ON ? element.colorOn : element.colorOff;
  },
};
