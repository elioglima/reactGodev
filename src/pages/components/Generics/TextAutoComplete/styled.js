import styled from "styled-components";

export const StContainer = styled.div`
  position: relative;
  display: flex;
  margin: 5px 5px 5px 5px;
  flex-direction: column;

  & span {
    font-size: 1.2em;
    font-family: "Roboto Slab", serif;
    letter-spacing: 2px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

export const StBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${props =>
    props.theme
      ? props.theme == "light"
        ? "#fff"
        : "rgba(40, 40, 40)"
      : "rgba(40, 40, 40)"};
  box-shadow: 1px 2px 7px 1px
    ${props =>
      props.theme
        ? props.theme == "light"
          ? "#000"
          : "rgba(255,255,255, 0.2)"
        : "rgba(255,255,255, 0.2)"};

  border-radius: 3px;
  padding: 0px 5px;

  & input {
    width: 100%;
    border: none;
    outline: none;
    padding: 5px 6px;
    font-size: 1em;
    font-family: "Roboto Slab", serif;
    letter-spacing: 2px;
    &:focus {
      /* background: #ecfcff; */
    }
  }
`;

export const StIcone = styled.div`
  font-size: 1.1em;
  padding-top: 8px;
  padding-right: 8px;
  cursor: pointer;
`;

export const StAutoComplete = styled.div`
  display: ${props => (props.openAutoComplete == true ? "block" : "none")};
  position: absolute;
  top: 61px;
  left: 0px;
  flex-direction: column;
  width: 96.9%;

  background: ${props =>
    props.theme
      ? props.theme == "light"
        ? "#fff"
        : "#979797"
      : "rgba(40, 40, 40)"};

  box-shadow: 1px 5px 7px 1px
    ${props =>
      props.theme ? (props.theme == "light" ? "#000" : "#ececeb") : "#ececeb"};

  border-radius: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  line-height: 30px;
`;

export const StLinha = styled.div`
  padding: 0 0;
`;
