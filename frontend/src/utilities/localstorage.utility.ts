const setLocalStorage = (name: string, value: string) =>
  window.localStorage.setItem(name, value);
const getLocalStorage = (name: string) => window.localStorage.getItem(name);

export const setAccountStorage = (value: string) =>
  setLocalStorage('account', value);
export const getAccountStorage = () => getLocalStorage('account');
