export const setBalance = (newBalance) => {
    return {
      type: 'SET_BALANCE',
      payload: newBalance,
    };
  };