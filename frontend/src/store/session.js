import  csrfFetch  from './csrf';

const SET_USER = 'session/setUser';
const ADD_USER = 'session/addUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const addUser = ( user ) => {
  return {
      type: ADD_USER,
      user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
//login thunk
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  console.log(response,"res")

  const data = await response.json()
  dispatch(setUser(data.user));
  return response;
};
//restore session user thunk
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//signup thunk
export const signup = (user) => async (dispatch) => {
  const { username, email, password} = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//logout thunk
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case ADD_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
