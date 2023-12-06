const initialState = {
    user: null,
    messages: [],
    rooms: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_MESSAGES':
        return { ...state, messages: action.payload };
      case 'SET_ROOMS':
        return { ...state, rooms: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  