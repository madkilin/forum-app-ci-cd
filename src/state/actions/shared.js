import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreads } from './threads';
import { receiveUsers } from './user';

export default function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(receiveUsers(users));
      dispatch(receiveThreads(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
