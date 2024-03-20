// reducers/balanceReducer.js

const initialState = {
    balance: 100000, // Domyślna wartość balansu
  };
  
  const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BALANCE':
        return {
          ...state,
          balance: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default balanceReducer;
  