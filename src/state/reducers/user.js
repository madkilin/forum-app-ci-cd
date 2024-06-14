import ActionType from '../../constants/actionType';

export default function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return action.payload.users;
    default:
      return users;
  }
}
