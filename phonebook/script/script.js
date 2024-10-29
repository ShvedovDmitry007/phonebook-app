import * as controlls from './module/controlls.js';
import * as render from './module/render.js';
import hoverRow from './module/hoverRow.js';
import {getStorage} from './module/storageActions.js';


{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = render.renderPhoneBook(app, title);

    // функционал
    const allRow = render.renderContact(list, getStorage('phone'));
    const {closeModal} = controlls.modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    controlls.deleteControl(btnDel, list);
    controlls.formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
  window.addEventListener('storage', () => {
    init();
  });
}
