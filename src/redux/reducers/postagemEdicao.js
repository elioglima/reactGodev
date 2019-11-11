const INITIAL_STATE = {
  loading: false,
  loaded: true,
  error: false,
  Lista: [],
  id: 0
};

export default function PostagemEdicao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "POSTAGEM_EDICAO_LISTA": {
      console.log(action.type, action);
      return {
        ...state,
        ...action,
        loading: true,
        loaded: false,
        error: false
      };
    }
    case "POSTAGEM_EDICAO_LISTA_SUCCESS": {
      console.log(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case "POSTAGEM_EDICAO_LISTA_ERROR": {
      console.log(action.type, action);
      return {
        ...state,
        ...action,
        loading: false,
        loaded: true,
        error: true
      };
    }

    case "POSTAGEM_EDICAO_SELECTID": {
      console.log(action.type, action);
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
}
