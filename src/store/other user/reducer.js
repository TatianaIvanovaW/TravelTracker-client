const initialState = {};

export default function otherUserReducer(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case "guest/OneUser": {
      return {
        ...state,
        data,
      };
    }

    default: {
      return state;
    }
  }
}
