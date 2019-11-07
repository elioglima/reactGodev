import styled from "styled-components";

export const StContainer = styled.div`
  width: 100%;  
  flex-direction:column;
`;

export const StBiografia = styled.div`
  & div {
    flex-direction:column;
    padding: 10px 10px;
    & span {
      padding: 3px 3px;      
    }
  }  
`;

