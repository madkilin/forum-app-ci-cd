import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/actionType';
import api from '../../utils/api';

export function receiveUsers(users) {
  return {
    type: ActionType.FETCH_USERS,
    payload: {
      users,
    },
  };
}

export function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };
}
