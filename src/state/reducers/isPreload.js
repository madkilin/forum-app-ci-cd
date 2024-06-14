import ActionType from '../../constants/actionType';

export default function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_LOADING_STATE:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}
