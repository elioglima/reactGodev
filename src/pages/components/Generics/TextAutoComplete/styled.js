import styled from "styled-components";
import { getTheme } from "../../../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  width: ${props => props.width && props.width};
  position: relative;
  display: flex;
  margin: 0 0;
  padding: 0 0;
  flex-direction: column;
`;

export const StTitulo = styled.div`
  font-size: 1.2em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 2px !important;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
`;

export const StBase = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  padding: 0px 0px !important;

  border-radius: 3px !important;
  ${props =>
    props.openAutoComplete && "border-bottom-left-radius: 0 !important"};
  ${props =>
    props.openAutoComplete && "border-bottom-right-radius: 0 !important"};

  background: ${props =>
    props.modoClaro === true
      ? props.focus
        ? getTheme(theme).claro.textAutoComplete.focus.background
        : getTheme(theme).claro.textAutoComplete.background
      : getTheme(theme).escuro.textAutoComplete.background + "!important"};

  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? props.focus
          ? getTheme(theme).claro.textAutoComplete.focus.boxShadow
          : getTheme(theme).claro.textAutoComplete.boxShadow
        : getTheme(theme).escuro.textAutoComplete.boxShadow + "!important"};
`;

export const StPesquisa = styled.input`
  padding: 2px 3px !important;
  width: 100% !important;
  border: none !important;
  outline: none !important;

  font-size: 0.9em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 2px !important;

  border-top-left-radius: 3px !important;
  border-bottom-left-radius: 3px !important;
  background: ${props => {
    if (props.focus || props.openAutoComplete) {
      return props.modoClaro === true
        ? getTheme(theme).claro.textAutoComplete.focus.background
        : getTheme(theme).escuro.textAutoComplete.focus.background +
            "!important";
    }
  }};
`;

export const StIcone = styled.div`
  font-size: 0.9em !important;
  padding-top: 6px !important;
  padding-right: 6px !important;
  padding-left: 3px !important;
  cursor: pointer !important;
`;

export const StAutoComplete = styled.div`
  z-index: 100 !important;
  display: ${props =>
    props.openAutoComplete == true ? "block" : "none"} !important;
  position: absolute !important;
  top: 30px !important;
  left: 5px !important;
  flex-direction: column !important;
  width: 97.5% !important;

  border-radius: 3px !important;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;

  background: ${props =>
    props.modoClaro === true
      ? props.focus
        ? getTheme(theme).claro.textAutoComplete.focus.background
        : getTheme(theme).claro.textAutoComplete.background
      : getTheme(theme).escuro.textAutoComplete.background + "!important"};

  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? props.focus
          ? getTheme(theme).claro.textAutoComplete.focus.boxShadow
          : getTheme(theme).claro.textAutoComplete.boxShadow
        : getTheme(theme).escuro.textAutoComplete.boxShadow + "!important"};
`;

export const StLinha = styled.div`
  padding: 0 0 !important;
`;

export const StSelecaoAutoComplete = styled.input`
  width: 100% !important;
  padding: 5px 10px !important;
  font-size: 1em !important;
  border: none !important;
  outline: none !important;
  cursor: pointer !important;

  &:hover {
    background: #eaf5ff !important;
  }

  &:focus {
    background: #537ec5 !important;
    color: #fff !important;
    outline: 0 none !important;
  }

  &::selection {
    background-color: rgba(0, 0, 0, 0) !important;
  }
`;
