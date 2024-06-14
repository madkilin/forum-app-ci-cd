import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './reducers/authUser';
import isPreloadReducer from './reducers/isPreload';
import usersReducer from './reducers/user';
import threadsReducer from './reducers/threads';
import threadDetailReducer from './reducers/threadDetail';
import leaderboardsReducer from './reducers/LeaderBoards';

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
