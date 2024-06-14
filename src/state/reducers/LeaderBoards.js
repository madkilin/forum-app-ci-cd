import ActionType from '../../constants/actionType';

export default function leaderboardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.FETCH_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}
