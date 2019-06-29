/**
 * Action Types
 */

export const Types = {
  REQUEST: 'profile/REQUEST',
  RESPONSE: 'profile/RESPONSE',
  FAILURE: 'profile/FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = { data: [], loading: false };

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.RESPONSE:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  requestOrders: () => ({
    type: Types.REQUEST,
  }),
  responseOrders: data => ({
    type: Types.RESPONSE,
    payload: { data },
  }),
  failure: () => ({
    type: Types.FAILURE,
  }),
};
