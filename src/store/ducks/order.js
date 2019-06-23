/**
 * Action Types
 */

export const Types = {
  SET_ITEMS: 'order/SET_ITEMS',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  items: [],
  deliveryAddress: {},
  observation: '',
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload.data };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  setItems: data => ({
    type: Types.SET_ITEMS,
    payload: { data },
  }),
};
