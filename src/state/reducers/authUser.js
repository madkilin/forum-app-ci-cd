import ActionType from '../../constants/actionType';

export default function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTHENTICATED_USER:
      return action.payload.authUser;
    case ActionType.REMOVE_AUTHENTICATED_USER:
      return null;
    default:
      return authUser;
  }
}
