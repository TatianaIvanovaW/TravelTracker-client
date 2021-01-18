const initialState = {};

export default function userVisitsReducer(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case "home/userVisits": {
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
