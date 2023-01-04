export const updateSessionOnStorage = (getState) => {
  const auth = getState().auth
  localStorage.setItem('auth', JSON.stringify(auth));
}

export const getSessionOnStorage = () => {
  try {
    let auth = localStorage.getItem('auth');
    return JSON.parse(auth);
  } catch (error) {
    return undefined
  }
}