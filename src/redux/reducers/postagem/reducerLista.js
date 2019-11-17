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
    case "POSTAGEM_LISTA": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: true,
        loaded: false,
        error: false
      };
    }
    case "POSTAGEM_LISTA_SUCCESS": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case "POSTAGEM_LISTA_ERROR": {
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
