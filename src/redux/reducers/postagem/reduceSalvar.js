import logs from "../../../logs";

const INITIAL_STATE = {
  loading: false,
  loaded: true,
  error: false,
  registro: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "POSTAGEM_SALVAR": {
      logs(action.type, action);
      return {
        ...state,
        registro: action.registro ? action.registro : {},
        loading: true,
        loaded: false,
        error: false
      };
    }
    case "POSTAGEM_SALVAR_SUCCESS": {
      logs(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case "POSTAGEM_SALVAR_ERROR": {
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
