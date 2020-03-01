// SIGN_IN
export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

// SIGN_OUT
export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};