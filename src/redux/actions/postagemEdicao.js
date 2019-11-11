export const EdicaoLista = payload => ({
  type: "POSTAGEM_EDICAO_LISTA",
  ...payload
});
export const EdicaoListaSuccess = payload => ({
  type: "POSTAGEM_EDICAO_LISTA_SUCCESS",
  ...payload
});
export const EdicaoListaError = payload => ({
  type: "POSTAGEM_EDICAO_LISTA_ERROR",
  ...payload
});
export const EdicaoSelectID = payload => ({
  type: "POSTAGEM_EDICAO_SELECTID",
  ...payload
});
