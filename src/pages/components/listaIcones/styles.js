import styled from "styled-components";
const theme = localStorage.getItem("theme");

export const StContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
  align-items: center;
`;

export const StImgReact = styled.div`
  width: 15em;
  height: 13em;

  & img {
    width: 100%;
    height: auto;
  }
`;
export const StImgGolang = styled.div`
  width: 15em;
  height: 15em;
  & img {
    width: 100%;
    height: auto;
  }
`;
export const StImgNodeJs = styled.div`
  width: 14em;
  height: 10em;
  padding-top: 2em;
  & img {
    width: 100%;
    height: auto;
  }
`;
