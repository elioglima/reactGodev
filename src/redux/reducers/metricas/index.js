const INITIAL_STATE = {
  theme: "dark"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "METRICS": {
      return {
        ...state,
        ...action
      };
    }
    default:
      return state;
  }
};
