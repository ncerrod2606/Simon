export const UI = {
  status: {
    ON: 1,
    OFF: 0,
  },

  listButtons: [],
  list: [],
  busy: false,

  init(configButtons) {
    UI.listButtons = configButtons;
    UI.listButtons.forEach(
      (item) => (item.id = document.getElementById(item.id))
    );
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
