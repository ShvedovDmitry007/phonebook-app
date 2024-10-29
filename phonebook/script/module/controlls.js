import {addContactPage} from './render.js';
import {removeStorage, setStorage} from './storageActions.js';

export const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === formOverlay ||
      target.classList.contains('close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

export const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    const eventContact = target.closest('.contact');
    if (target.closest('.del-icon')) {
      removeStorage(eventContact.querySelector('a').textContent);
      eventContact.remove();
    }
  });
};

export const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);
    setStorage('phone', JSON.stringify(newContact));
    form.reset();
    closeModal();
  });
};
