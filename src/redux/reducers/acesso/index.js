import logs from "../../../logs";

const INITIAL_STATE = {
  loading: false,
  loaded: true,
  error: false,
  totalRegistros: [],
  registros: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ACESSO_SIS": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: true,
        loaded: false,
        error: false
      };
    }
    case "ACESSO_SIS_SUCCESS": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case "ACESSO_SIS_ERROR": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: true
      };
    }
    default:
      return state;
  }
};
