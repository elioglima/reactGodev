import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${props => (props.height ? props.height + "px" : "auto")};
  margin: 0;
  img {
    width: 100%;
    max-height: 400px;
  }
`;
