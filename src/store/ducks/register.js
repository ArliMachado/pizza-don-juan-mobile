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
  error: '',
};

export default function register(state = INITIAL_STATE, action) {
  switch (action.Types) {
    case Types.REQUEST:
      return { ...state, loading: true };

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
