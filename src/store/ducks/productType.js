import { navigate } from '~/services/navigation';
/**
 * Action Types
 */

export const Types = {
  REQUEST: 'productType/REQUEST',
  SUCCESS: 'productType/SUCCESS',
  FAILURE: 'productType/FAILURE',
  SELECTED: 'productType/SELECTED',
};

/**
 * Reducers
 */
const INITIAL_STATE = { productSelected: {}, data: [], loading: false };
export default function productType(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    case Types.FAILURE:
      return { ...state };
    case Types.SELECTED:
      navigate('ProductSizes');
      return { ...state, loading: false, productSelected: action.payload.data };
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
  producTypeFailure: () => ({
    type: Types.FAILURE,
  }),
  productTypeSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
};
