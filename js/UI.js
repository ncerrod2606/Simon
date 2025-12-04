export const UI = {
  status: {
    ON: 1,
    OFF: 0,
  },

  listButtons: [],
  list: [],
  busy: false,
  accion:null,

  init(configButtons) {
    UI.listButtons = configButtons;
    UI.listButtons.forEach(
      (item) => {
        item.id = document.getElementById(item.id);
        item.id.addEventListener("click", () => {

          UI.change(item, UI.status.ON);
          UI.change(item, UI.status.OFF);
          UI.accion(item);
        });
      }
    );
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
    // UI.sacarJugada();
  },
  sacarJugada: () => {
    let UserList = [];
    UI.listButtons.forEach((item) => {
      item.id.addEventListener("click", () => {
        UserList.push(UI.listButtons.indexOf(item));
        UI.compare(UserList);
        console.log(UserList);
      });
    });
  },

  compare: (UserList) => {
    
    if (UserList.length == UI.list.length) {
      if (UserList == UI.list) {
        console.log("Has ganado");
      } else {
        console.log("Has perdido");
        console.log(UserList);
        console.log(UI.list);
      }
    } else {
      console.log("No tiene la misma longitud");
    }
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
};
