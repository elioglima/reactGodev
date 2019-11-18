import styled from "styled-components";
const theme = localStorage.getItem("theme");
export const StContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 1);
  /* justify-content:space-between; */
`;
