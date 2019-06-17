/**
 * Action Types
 */

export const Types = {
  REQUEST: 'productType/REQUEST',
  SUCCESS: 'productType/SUCCESS',
  FAILURE: 'productType/FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = { data: [], loading: false };
export default function productType(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    case Types.FAILURE:
      return { ...state };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  productTypeRequest: () => ({
    type: Types.REQUEST,
  }),
  productTypeSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  productypeFailure: () => ({
    type: Types.FAILURE,
  }),
};
