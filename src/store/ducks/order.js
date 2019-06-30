/**
 * Action Types
 */

export const Types = {
  SET_ORDER: 'order/SET_ORDER',
  SET_OBSERVATION: 'order/SET_OBSERVATION',
  SET_STREET: 'order/SET_STREET',
  SET_NUMBER: 'order/SET_NUMBER',
  SET_CITY: 'order/SET_CITY',
  CEP_REQUEST: 'order/CEP_REQUEST',
  CEP_RESPONSE: 'order/CEP_RESPONSE',
  REQUEST: 'order/REQUEST',
  RESPONSE: 'order/RESPONSE',
  FAILURE: 'order/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  products: [],
  totalValue: 0,
  address: {},
  observation: '',
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ORDER:
      return {
        ...state,
        products: action.payload.data.products,
        totalValue: action.payload.data.totalValue,
      };
    case Types.SET_OBSERVATION:
      return { ...state, observation: action.payload.data };
    case Types.SET_STREET:
      return { ...state, address: { ...state.address, street: action.payload.data } };
    case Types.SET_NUMBER:
      return { ...state, address: { ...state.address, number: action.payload.data } };
    case Types.SET_CITY:
      return { ...state, address: { ...state.address, city: action.payload.data } };
    case Types.CEP_REQUEST:
      return { ...state, loading: true };
    case Types.CEP_RESPONSE:
      return { ...state, loading: false, address: action.payload.data };
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.RESPONSE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  setOrder: data => ({
    type: Types.SET_ORDER,
    payload: { data },
  }),
  setObservation: data => ({
    type: Types.SET_OBSERVATION,
    payload: { data },
  }),
  setStreet: data => ({
    type: Types.SET_STREET,
    payload: { data },
  }),
  setNumber: data => ({
    type: Types.SET_NUMBER,
    payload: { data },
  }),
  setCity: data => ({
    type: Types.SET_CITY,
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
  orderRequest: () => ({
    type: Types.REQUEST,
  }),
  orderResponse: () => ({
    type: Types.RESPONSE,
  }),
};
