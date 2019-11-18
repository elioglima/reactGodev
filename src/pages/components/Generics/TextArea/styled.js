import styled from "styled-components";
import { getTheme } from "../../../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  display: flex !important;
  width: ${props => props.width && props.width} !important;
  margin: 0px 0px !important;
  padding: 0px 0px 0 0px !important;
  flex-direction: column !important;
`;

export const StTitulo = styled.div`
  font-size: 1.2em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 2px !important;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
`;

export const StPesquisa = styled.textarea`
  width: 98.5% !important;
  border-radius: 3px !important;
  border: none !important;
  outline: none !important;
  padding: 2px 3px !important;
  font-size: 0.9em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 1px !important;

  :focus {
    background: #ecfcff !important;
  }

  background: ${props =>
    props.modoClaro === true
      ? props.focus
        ? getTheme(theme).claro.textArea.focus.background
        : getTheme(theme).claro.textArea.background
      : getTheme(theme).escuro.textArea.background + "!important"};

  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? props.focus
          ? getTheme(theme).claro.textArea.focus.boxShadow
          : getTheme(theme).claro.textArea.boxShadow
        : getTheme(theme).escuro.textArea.boxShadow + "!important"};
`;
