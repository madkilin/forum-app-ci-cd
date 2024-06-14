import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/actionType';
import api from '../../utils/api';

export function upVoteComment(commentId, userId) {
  return {
    type: ActionType.LIKE_COMMENT_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

export function downVoteComment(commentId, userId) {
  return {
    type: ActionType.UNLIKE_COMMENT_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

export function neutralizeVoteComment(commentId, userId) {
  return {
    type: ActionType.RESET_COMMENT_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}
export function createComment(comment) {
  return {
    type: ActionType.ADD_NEW_COMMENT,
    payload: {
      comment,
    },
  };
}

export function receiveThreadDetail(threadDetail) {
  return {
    type: ActionType.FETCH_THREAD_DETAILS,
    payload: {
      threadDetail,
    },
  };
}
export function upVoteThreadDetail(userId) {
  return {
    type: ActionType.LIKE_THREAD_DETAIL_VOTE,
    payload: {
      userId,
    },
  };
}

export function downVoteThreadDetail(userId) {
  return {
    type: ActionType.UNLIKE_THREAD_DETAIL_VOTE,
    payload: {
      userId,
    },
  };
}

export function neutralizeVoteThreadDetail(userId) {
  return {
    type: ActionType.RESET_THREAD_DETAIL_VOTE,
    payload: {
      userId,
    },
  };
}
export function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetail(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, auth } = getState();
    dispatch(upVoteThreadDetail(auth.id));
    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
export function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, auth } = getState();
    dispatch(downVoteThreadDetail(auth.id));
    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, auth } = getState();
    dispatch(neutralizeVoteThreadDetail(auth.id));
    try {
      await api.neutralizeThreadVote(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncCreateComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();
    try {
      const comment = await api.createComment({
        content,
        threadId: threadDetail.id,
      });
      dispatch(createComment(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth, threadDetail } = getState();
    dispatch(upVoteComment(commentId, auth.id));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth, threadDetail } = getState();
    dispatch(downVoteComment(commentId, auth.id));
    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncNeutralizeVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { auth, threadDetail } = getState();
    dispatch(neutralizeVoteComment(commentId, auth.id));
    try {
      await api.neutralVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
