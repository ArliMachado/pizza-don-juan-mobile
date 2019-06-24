/**
 * Action Types
 */

export const Types = {
  SET_ITEMS: 'order/SET_ITEMS',
  CEP_REQUEST: 'order/CEP_REQUEST',
  CEP_RESPONSE: 'order/CEP_RESPONSE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  items: [],
  address: {},
  observation: '',
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ITEMS:
      return { ...state, items: action.payload.data };
    case Types.CEP_REQUEST:
      return { ...state, loading: true };
    case Types.CEP_RESPONSE:
      return { ...state, loading: false, address: action.payload.data };
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
  cepRequest: cep => ({
    type: Types.CEP_REQUEST,
    payload: { cep },
  }),
  cepResponse: data => ({
    type: Types.CEP_RESPONSE,
    payload: { data },
  }),
};
