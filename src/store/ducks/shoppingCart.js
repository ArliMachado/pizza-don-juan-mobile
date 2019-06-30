/**
 * Action Types
 */

export const Types = {
  ADD: 'shoppingCart/ADD',
  REMOVE: 'shoppingCart/REMOVE',
  ADD_TO_ORDER: 'shoppingCart/ADD_TO_ORDER',
  FAILURE: 'shoppingCart/FAILURE',
  CLEAN: 'shoppingCart/CLEAN',
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
    case Types.CLEAN:
      return INITIAL_STATE;
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
  addToOrder: data => ({
    type: Types.ADD_TO_ORDER,
    payload: { data },
  }),
  cleanCart: () => ({
    type: Types.CLEAN,
  }),
};
