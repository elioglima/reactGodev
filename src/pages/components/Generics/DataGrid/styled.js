import styled from "styled-components";

export const BASE = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StTabela = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  background: ${props =>
    props.theme
      ? props.theme == "light"
        ? "#e5e5e5"
        : "rgba(40, 40, 40)"
      : "rgba(40, 40, 40)"};
  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.theme
        ? props.theme == "light"
          ? "#000"
          : "rgba(255,255,255, 0.2)"
        : "rgba(255,255,255, 0.2)"};
  border-radius: 3px;
`;

export const Caption = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: initial;
  padding: 5px 0 5px 10px;
`;

export const TituloColuna = styled.div`
  display: flex;
  width: ${props => props.width};
  padding: 5px 5px;
`;

export const BaseLinha = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
`;

export const Linhas = styled.div`
  display: flex;
  flex-direction: initial;
  padding: 5px 0 5px 10px;
  cursor: pointer;

  :hover {
    background: #deecff;
  }

  :active {
    background: #5893d4;
    color: #fff;
  }
`;

export const LinhasColuna = styled.div`
  display: flex;
  width: ${props => props.width};
  padding: 5px 5px;
`;
