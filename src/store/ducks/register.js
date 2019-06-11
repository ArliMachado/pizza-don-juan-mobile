/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'register/REQUEST',
  SUCCESS: 'register/SUCCESS',
  FAILURE: 'register/FAILURE',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  user: {},
  loading: false,
  error: false,
};

export default function register(state = INITIAL_STATE, action) {
  switch (action.Types) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, loading: false };

    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */

export const Creators = {
  registerRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),
  registerSuccess: () => ({
    type: Types.SUCCESS,
  }),
  registerFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
