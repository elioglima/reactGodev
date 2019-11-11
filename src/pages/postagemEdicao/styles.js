import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const StHistoria = styled.div`
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 10px;
`;

export const StHistoriaTitulo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const StHeader = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StBase1 = styled.div`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;

  & div {
    flex-direction: column;

    & span {
      padding: 2px 20px 2px 0px;
    }

    &:first-child {
      & span {
        color: #233142;
      }
    }

    &:last-child {
      & span {
        color: #005792;
      }
    }
  }
`;

export const StTituloImg = styled.div``;

export const StTexto = styled.div`
  margin-top: 10px;
  color: #233142;
  font-size: 1.3em;
  text-align: justify;
`;

export const StBirthDate = styled.div``;

export const StRecomendados = styled.div`
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const StRecomendadosTitulo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const StDataGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5%;
`;
