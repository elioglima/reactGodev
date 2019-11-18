import styled from "styled-components";
import { getTheme } from "../../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 5%;
  justify-content: space-between;

  background: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.header.background
      : getTheme(theme).escuro.header.background};

  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? getTheme(theme).claro.header.boxShadow
        : getTheme(theme).escuro.header.boxShadow};
`;

export const StTitulo = styled.div`
  display: flex;
  color: #fff;
  font-family: "Audiowide", cursive;
  font-size: 40px;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    color: #f9f9f9;
  }

  :active {
    color: #c8e6f5;
  }
`;

export const StDescritivo = styled.div`
  display: flex;
  color: #babfbc;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
`;
export const StBase1 = styled.div`
  display: flex;
  color: #babfbc;
  font-family: "Amaranth", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  flex-direction: column;
  width: auto;
`;

export const StInscreverSe = styled.div`
  display: flex;
  color: #3dd1ec;
  font-family: "Roboto Slab";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
  align-items: center;
  text-transform: uppercase;
  margin: 0;

  cursor: pointer;
  &::selection {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  &:hover {
    color: #a9d3ff;
  }
`;

export const StPesquisa = styled.div`
  display: flex;
  color: #babfbc;
  font-family: "Amaranth", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  align-items: center;
`;
export const StPesquisaBaseInput = styled.div`
  display: flex;
  border: 1px;
  height: 20px;
  border-radius: 5px;
  padding: 5px;
  background: ${props => (props.pesquisa.length > 0 ? "#323332" : "#000")};

  background: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.header.pesquisa.background
      : getTheme(theme).escuro.header.pesquisa.background};

  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? getTheme(theme).claro.header.pesquisa.boxShadow
        : getTheme(theme).escuro.header.pesquisa.boxShadow};

  & > input {
    background: ${props => {
      if (props.pesquisa.length > 0) {
        return getTheme(theme).claro.header.pesquisa.focus.background;
      }

      return props.modoClaro === true
        ? getTheme(theme).claro.header.pesquisa.background
        : getTheme(theme).escuro.header.pesquisa.background;
    }};

    color: #babfbc;
    font-family: "Amaranth", sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 5px;
    outline: none;
    border: none;

    &:focus {
      background: ${props =>
        props.modoClaro === true
          ? getTheme(theme).claro.header.pesquisa.focus.background
          : getTheme(theme).escuro.header.pesquisa.focus.background};
    }
  }

  &:focus-within {
    background: ${props =>
      props.modoClaro === true
        ? getTheme(theme).claro.header.pesquisa.focus.background
        : getTheme(theme).escuro.header.pesquisa.focus.background};
  }

  & > i {
    cursor: pointer;
    margin-top: 2px;
    font-size: 15px;
  }
`;
