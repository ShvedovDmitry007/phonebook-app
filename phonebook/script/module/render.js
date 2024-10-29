import createForm from './createModal.js';
import * as element from './createTable.js';

export const renderPhoneBook = (app, title) => {
  const header = element.createHeader();
  const logo = element.createLogo(title);
  const main = element.createMain();
  const buttonGroup = element.createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = element.createTable();
  const {form, overlay} = createForm();
  const footer = element.createFooter();
  const footerCopyright = element.createCopyright(title);

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  footer.footerContainer.append(footerCopyright);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContact = (elem, data) => {
  const allRow = data.map(element.createRow);
  elem.append(...allRow);
  return allRow;
};

export const addContactPage = (contact, list) => {
  list.append(element.createRow(contact));
};

