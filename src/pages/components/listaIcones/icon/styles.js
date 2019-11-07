import styled from "styled-components";

export const StContainer = styled.div`
  width: ${props => props.size ? props.size + 'em' : '15em'};  
  height: ${props => props.height ? props.height + 'em' : '13em'};  
  & img {    
    width: 100%;
    height: auto;
    cursor:pointer;
  }
`;
