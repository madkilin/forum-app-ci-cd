/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with toggled UpVote when given
 *    by UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled DownVote when given
 *    by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail without toggled UpVote and DownVote when given
 *    by NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with new comment when given by CREATE_COMMENT action
 *  - should return the thread detail with toggled UpVote comment when given
 *    by LIKE_THREAD_VOTE action
 *  - should return the thread detail with toggled DownVote comment when given
 *    by UNLIKE_THREAD_VOTE action
 *  - should return the thread detail without toggled UpVote and DownVote comment
 *    when given by RESET_THREAD_VOTE action
 *
 */

import threadDetailReducer from './threadDetail';

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the thread detail when given by FETCH_THREAD_DETAILS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'FETCH_THREAD_DETAILS',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('should return the thread detail with toggled UpVote when given by LIKE_THREAD_DETAIL_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'LIKE_THREAD_DETAIL_VOTE',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });
  it('should return the thread detail with toggled DownVote when given by UNLIKE_THREAD_DETAIL_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'UNLIKE_THREAD_DETAIL_VOTE',
      payload: {
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });
  it('should return the thread detail without toggled UpVote and DownVote when given by RESET_THREAD_DETAIL_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'RESET_THREAD_DETAIL_VOTE',
      payload: {
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });
  it('should return the thread detail with new comment when given by ADD_NEW_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'ADD_NEW_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });
  it('should return the thread detail with UpVote toggled comment when given by LIKE_COMMENT_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'LIKE_COMMENT_VOTE',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });
  it('should return the thread detail with DownVote toggled comment when given by UNLIKE_COMMENT_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'UNLIKE_COMMENT_VOTE',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });
  it('should return the thread detail without toggled UpVote and DownVote comment when given by RESET_COMMENT_VOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      ],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'RESET_COMMENT_VOTE',
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});
