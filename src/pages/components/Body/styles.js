import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  color: ${props => (props.color ? props.color : "#e5e5e5")};
  background: ${props =>
    props.background ? props.background : "rgba(20,20,20)"};
`;

export const StBase = styled.div`
  padding: 10px 5%;
  flex-direction: row;
  flex-wrap: wrap;
`;
