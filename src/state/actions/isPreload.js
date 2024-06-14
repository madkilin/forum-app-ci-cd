import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/actionType';
import { setAuthUser } from './authUser';
import api from '../../utils/api';

export function setIsPreload(isPreload) {
  return {
    type: ActionType.SET_LOADING_STATE,
    payload: {
      isPreload,
    },
  };
}

export function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const getToken = await api.getAccessToken();
      if (getToken === null || getToken === undefined) {
        dispatch(setAuthUserAction(null));
      }
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      dispatch(setAuthUser(null));
    } finally {
      dispatch(setIsPreload(false));
    }
    dispatch(hideLoading());
  };
}
