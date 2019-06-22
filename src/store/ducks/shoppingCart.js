/**
 * Action Types
 */

export const Types = {
  ADD: 'shoppingCart/ADD',
  REMOVE: 'shoppingCart/REMOVE',
  FINISH: 'shoppingCart/FINISH',
  FAILURE: 'shoppingCart/FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = { items: [], loading: false };
export default function shoppingCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { ...state, items: [...state.items, action.payload.data] };
    case Types.REMOVE:
      return {
        ...state,
        items: [...state.items.filter(item => item !== action.payload.item)],
      };

    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  shoppingCartAdd: data => ({
    type: Types.ADD,
    payload: { data },
  }),
  shoppingCartRemove: item => ({
    type: Types.REMOVE,
    payload: { item },
  }),
};
