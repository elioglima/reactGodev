import styled from "styled-components";
import { getTheme } from "../../../assets/theme";
const theme = localStorage.getItem("theme");

export const ButtonPrimary = styled.a`
  cursor: pointer;
  border: none;
  border-radius: 30px;
  color: white;
  display: flex;
  font-size: 20px;
  height: fit-content;
  justify-content: center;
  margin: auto 10px !important;
  padding: 15px 40px;
  text-decoration: none;
  user-select: none;
  width: fit-content;

  background: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.botao[props.modo].background
      : getTheme(theme).escuro.botao[props.modo].background};

  box-shadow: 2px 2px 4px
    ${props =>
      props.modoClaro === true
        ? getTheme(theme).claro.botao[props.modo].boxShadow
        : getTheme(theme).escuro.botao[props.modo].boxShadow};

  @media (max-width: 568px) {
    padding: 15px 30px;
  }

  @media (max-width: 360px) {
    padding: 15px 5%;
  }

  &:hover {
    cursor: pointer;
  }

  & > img {
    margin-left: 10px;

    @media (min-width: 568px) {
      margin-left: 30px;
    }
  }

  &.modalOpen {
    & > img {
      transform: rotate(-180deg);
      transition: all 1s ease-out;
      -webkit-transition: all 1s ease-out;
    }
  }

  &.modalClosed {
    & > img {
      transform: rotate(0deg);
      transition: all 1s ease-out;
      -webkit-transition: all 1s ease-out;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-180deg);
    }
  }

  @keyframes rotateInitial {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
