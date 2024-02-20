export const initialState = {
  total: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.types) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "update price":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw new Error("Cannot match case on reducer");
  }
};

export default storeReducer;
