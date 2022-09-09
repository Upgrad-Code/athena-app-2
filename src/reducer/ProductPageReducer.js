export const iState = {
  isLoading: false,
  products: [],
  cart: [],
  error: null,
};

export const ACTIONS_TYPE = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

export const ProductPageReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPE.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ACTIONS_TYPE.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
