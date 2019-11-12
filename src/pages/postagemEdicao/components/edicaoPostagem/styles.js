import styled from "styled-components";

export const StContainer = styled.div`
  flex-direction: column;
`;

export const StLinha = styled.div`
  flex-direction: row;
  padding: 10px 5%;
  justify-content: space-between;

  & > div {
    width: 100%;
  }
`;
