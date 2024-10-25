export const getStorage = key => {
  if (localStorage.getItem(key) === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const setStorage = (key, contact) => {
  const data = getStorage(key);
  localStorage.setItem(key, contact);
  data.push(JSON.parse(localStorage.getItem(key)));
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = phone => {
  const data = getStorage('phone');
  data.forEach((contact, index) => {
    if (contact.phone === phone) {
      data.splice(index, 1);
      localStorage.setItem('phone', JSON.stringify(data));
    }
  });
};
