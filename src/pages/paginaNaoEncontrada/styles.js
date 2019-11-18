import styled from "styled-components";
import { getTheme } from "../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  background: ${props => getTheme(theme).botaoClaro.background};
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const StBase = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StTitulo = styled.div`
  display: flex;
  padding: 5% 5%;
  font-size: 1.8em;
`;
