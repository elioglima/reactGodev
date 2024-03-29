import styled from "styled-components";
import { getTheme } from "../../../assets/theme";
const theme = localStorage.getItem("theme");

export const ModalBox = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  font-family: sans-serif;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  animation: efeitoBackground 1s;
  @keyframes efeitoBackground {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Box = styled.div`
  background: ${props => getTheme(theme)[props.modoTheme].modal.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  contain: content;
  display: flex;
  flex-direction: column;
  max-height: 1000vh;
  min-width: 30vw;
  z-index: 1;
  padding-right: 13px;
  @media (max-width: 568px) {
    border-radius: 0;
    height: 100vh;
    max-height: 100vh;
    width: 100%;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 568px) {
    border-radius: 0;
  }

  & > .close {
    color: white;
    cursor: pointer;
    font-size: 40px;
    margin: 0 20px;
    text-align: right;
    @media (max-width: 568px) {
      margin: 20px 15px;
    }
  }
`;

export const Title = styled.div`
  color: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.modal.titulo.color
      : getTheme(theme).escuro.modal.titulo.color};

  font-size: 24px;
  margin: 0 0;
  padding: 30px 35px;
  width: fit-content;
  @media (max-width: 568px) {
    padding: 30px 15px;
  }
`;

export const Body = styled.div`
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 19px 0 19px;
  padding-bottom: 30px;
  overflow-y: auto;

  @media (max-width: 568px) {
    padding-bottom: 20px;
  }

  & > a {
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 568px) {
      margin-top: 0px;
      padding: 15px 20px;
    }
  }
`;
