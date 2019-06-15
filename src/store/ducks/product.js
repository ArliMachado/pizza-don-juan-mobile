/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'product/REQUEST',
  SUCCESS: 'product/SUCCESS',
  FAILURE: 'product/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = { data: [], loading: false };

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
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
  productRequest: () => ({
    type: Types.REQUEST,
  }),
  productSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  productFailure: () => ({
    type: Types.FAILURE,
  }),
};
