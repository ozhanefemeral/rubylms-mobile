  const userState = {
    user: [],
    token: null,
  };
  
  const userReducer = (state, action) => {
    switch (action.type) {
    case 'updateUser':
      return { ...state, user: action.data };
    case 'updateToken':
      return { ...state, token: action.data };
    default:
      return { ...state };
    }
  };
  
  export {
    userReducer as default,
    userState,
  };