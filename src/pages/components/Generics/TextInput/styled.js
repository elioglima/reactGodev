import styled from "styled-components";

export const StContainer = styled.div`
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

  & input {
    width: 96%;
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
    border: none;
    outline: none;
    padding: 5px 6px;
    font-size: 1em;
    font-family: "Roboto Slab", serif;
    letter-spacing: 2px;
    :focus {
      background: #ecfcff;
    }
  }
`;
