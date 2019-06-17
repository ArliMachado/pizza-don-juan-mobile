import { navigate } from '~/services/navigation';

/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'product/REQUEST',
  SUCCESS: 'product/SUCCESS',
  FAILURE: 'product/FAILURE',
  SELECTED: 'product/SELECTED',
};

/**
 * Reducers
 */

const INITIAL_STATE = { productSelected: {}, data: [], loading: false };

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    case Types.FAILURE:
      return { ...state, loading: false };
    case Types.SELECTED:
      navigate('ProductTypes');
      return { ...state, loading: false, productSelected: action.payload.data };
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
  productSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
};
