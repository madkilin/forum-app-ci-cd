import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import ActionType from '../../constants/actionType';

export function upVoteThread({ threadId, userId }) {
  return {
    type: ActionType.LIKE_THREAD_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

export function downVoteThread({ threadId, userId }) {
  return {
    type: ActionType.UNLIKE_THREAD_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}
export function receiveThreads(threads) {
  return {
    type: ActionType.FETCH_THREADS,
    payload: {
      threads,
    },
  };
}
export function neturalizeVoteThread({ threadId, userId }) {
  return {
    type: ActionType.RESET_THREAD_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}
export function createThread(thread) {
  return {
    type: ActionType.ADD_NEW_THREAD,
    payload: {
      thread,
    },
  };
}

export function asyncCreateThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(createThread(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth } = getState();
    dispatch(upVoteThread({ threadId, userId: auth.id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThread({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth } = getState();
    dispatch(downVoteThread({ threadId, userId: auth.id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThread({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export function asyncNeturalizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth } = getState();
    dispatch(neturalizeVoteThread({ threadId, userId: auth.id }));
    try {
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neturalizeVoteThread({ threadId, userId: auth.id }));
    }
    dispatch(hideLoading());
  };
}
