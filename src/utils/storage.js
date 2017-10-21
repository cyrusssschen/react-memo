export const setStorage = (key, value) => {
  if (!window.localStorage) return alert('Sorry. Local storage cannot be supported in your browser!' );
  localStorage.setItem(key, value);
}

export const getStorage = (key) => {
  return localStorage.getItem(key);
}