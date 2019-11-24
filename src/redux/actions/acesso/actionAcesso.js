export const acEntrarSistema = payload => ({
  type: "ACESSO_SIS",
  ...payload
});

export const acEntrarSistemaSuccess = payload => ({
  type: "ACESSO_SIS_SUCCESS",
  ...payload
});
export const acEntrarSistemaError = payload => ({
  type: "ACESSO_SIS_ERROR",
  ...payload
});
