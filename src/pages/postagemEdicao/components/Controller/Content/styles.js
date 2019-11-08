import styled from "styled-components";

export const StContainer = styled.div`
  width: 100%;
  flex-direction: column;
  padding: 0 5%;
`;

export const StBiografia = styled.div`
  flex-direction: column;
  padding: 10px 0;
  & div div {
    flex-direction: column;
    padding: 10px 10px;
    & span {
      padding: 3px 3px;
    }
  }
`;

export const StDescriptions = styled.div`
  padding: 10px 0px;
`;

export const StIntroducao = styled.div`
  padding: 30px 10px 10px 0px;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  letter-spacing: 0.1em;
`;
