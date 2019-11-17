export const acPostagemLista = payload => ({
  type: "POSTAGEM_LISTA",
  ...payload
});

export const acPostagemListaSuccess = payload => ({
  type: "POSTAGEM_LISTA_SUCCESS",
  ...payload
});
export const acPostagemListaError = payload => ({
  type: "POSTAGEM_LISTA_ERROR",
  ...payload
});
