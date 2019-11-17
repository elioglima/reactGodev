export const postagemSalvar = payload => ({
  type: "POSTAGEM_SALVAR",
  ...payload
});
export const postagemSalvarSuccess = payload => ({
  type: "POSTAGEM_SALVAR_SUCCESS",
  ...payload
});
export const postagemSalvarError = payload => ({
  type: "POSTAGEM_SALVAR_ERROR",
  ...payload
});
