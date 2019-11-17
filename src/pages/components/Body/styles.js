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
  display: flex;
  padding: ${props => (props.paddingVertical ? props.paddingVertical : "0")}
    ${props => (props.paddingHorizontal ? props.paddingHorizontal : "0")};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: wrap;
  ${props => props.alignContent && "align-content:" + props.alignContent};
  ${props => props.height && "height:" + props.height};
  ${props => props.justifyContent && "justify-content:" + props.justifyContent};
`;
