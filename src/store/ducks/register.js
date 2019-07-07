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
  message: null,
};

export default function register(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, loading: false };
    case Types.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.data,
      };
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
  registerFailure: data => ({
    type: Types.FAILURE,
    payload: { data },
  }),
};
