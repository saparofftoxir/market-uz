export const InitialState = {
  basket: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return (state = {
        ...state,
        basket: [...state.basket, action.payload],
      });
    case "DELETE_ITEM_BASKEt":
      const filtered = state.basket.filter(
        (item) => item.id !== action.payload
      );
      return (state = {
        ...state,
        basket: filtered,
      });
  }
};
export default { InitialState, reducer };
