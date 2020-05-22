export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const changeLoginActionCreator = (login) => ({
  type: CHANGE_LOGIN,
  login,
});

export const submitLoginActionCreator = () => ({
  type: SUBMIT_LOGIN,
});
