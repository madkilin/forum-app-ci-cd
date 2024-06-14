import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/actionType';
import api from '../../utils/api';

export function setAuthUser(authUser) {
  return {
    type: ActionType.SET_AUTHENTICATED_USER,
    payload: {
      authUser,
    },
  };
}
export function unsetAuthUser() {
  return {
    type: ActionType.REMOVE_AUTHENTICATED_USER,
  };
}
export function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unsetAuthUser());
      api.deleteAccessToken();
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
