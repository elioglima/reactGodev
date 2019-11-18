import styled from "styled-components";
import { getTheme } from "../../../assets/theme";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 5%;
  justify-content: space-between;
  color: #fff;
  font-family: "sans-serif";
  letter-spacing: 3px;

  border-top: 1px solid #0b1b24;
  background: ${props =>
    props.modoClaro === true
      ? getTheme(theme).claro.footer.background
      : getTheme(theme).escuro.footer.background};

  & > div > a {
    margin-left: 10px;
    font-size: 15px;
    color: #fff;
  }
`;
