import styled from "styled-components";
import { getTheme } from "../../../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  background: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.background
      : getTheme(theme).escuro.background};
  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.modoClaro === true
        ? getTheme(theme).claro.boxShadow
        : getTheme(theme).escuro.boxShadow};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 2% 10px 0;
  padding-top: 20px;
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 20px;

  ${props =>
    props.colCount && props.colCount > 0
      ? "width:" + (100 / props.colCount - 4) + "%;"
      : "100%"};

  & > span {
    color: ${props =>
      props.modoClaro
        ? getTheme(theme).claro.color.nivel1
        : getTheme(theme).escuro.color.nivel1};
    font-size: 1rem;
    margin-top: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > span {
      &:first-child {
        color: ${props =>
          props.modoClaro
            ? getTheme(theme).claro.color.nivel2
            : getTheme(theme).escuro.color.nivel2};
        font-weight: bolder;
        font-size: 1.1rem;
        margin-bottom: 10px;
      }
      &:not(:first-child) {
        color: ${props =>
          props.modoClaro
            ? getTheme(theme).claro.color.nivel3
            : getTheme(theme).escuro.color.nivel3};
        text-align: justify;
      }
    }
  }
`;
