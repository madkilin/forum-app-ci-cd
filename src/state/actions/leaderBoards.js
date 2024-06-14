import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/actionType';
import api from '../../utils/api';

export function receiveLeaderboards(leaderboards) {
  return {
    type: ActionType.FETCH_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export function asyncPopulateLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderBoards();
      dispatch(receiveLeaderboards(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
