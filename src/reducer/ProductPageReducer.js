export const iState = {
  isLoading: false,
  products: [],
  cart: [],
  cartItemsCount: 0,
  error: null,
};

export const ACTIONS_TYPE = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
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
    case ACTIONS_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(
          state.products.filter((p) => p.id === action.payload)
        ),
      };
    case ACTIONS_TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload),
      };
    default:
      return {
        state,
      };
  }
};
