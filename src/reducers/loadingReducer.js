const loadingState = {
    loading: [],
  };
  
  const loadingReducer = (state, action) => {
    switch (action.type) {
    case 'updateLoading':
      return { ...state, loading: action.data };
    default:
      return { ...state };
    }
  };
  
  export {
    loadingReducer as default,
    loadingState,
  };