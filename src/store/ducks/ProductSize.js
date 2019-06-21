import { navigate } from '~/services/navigation';
/**
 * Action Types
 */

export const Types = {
  REQUEST: 'productSize/REQUEST',
  SUCCESS: 'productSize/SUCCESS',
  FAILURE: 'productSize/FAILURE',
  SELECTED: 'productSize/SELECTED',
};

/**
 * Reducers
 */
const INITIAL_STATE = { productSelected: {}, data: [], loading: false };
export default function productSize(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    case Types.FAILURE:
      return { ...state };
    case Types.SELECTED:
      return { ...state, loading: false, productSelected: action.payload.data };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  productSizeRequest: () => ({
    type: Types.REQUEST,
  }),
  productSizeSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  productSizeFailure: () => ({
    type: Types.FAILURE,
  }),
  productSizeSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
};
