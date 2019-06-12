/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'auth/REQUEST',
  SUCCESS: 'auth/SUCCESS',
  FAILURE: 'auth/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = { loading: false };

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };

    case Types.SUCCESS:
      return { ...state, loading: false };

    case Types.FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  authRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),
  authSuccess: () => ({
    type: Types.SUCCESS,
  }),
  authFailure: () => ({
    type: Types.FAILURE,
  }),
};
