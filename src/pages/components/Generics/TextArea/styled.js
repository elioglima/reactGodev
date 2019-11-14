import styled from "styled-components";

export const StContainer = styled.div`
  display: flex !important;
  width: ${props => props.width && props.width} !important;
  margin: 0px 0px !important;
  padding: 0px 0px 0 0px !important;
  flex-direction: column !important;
`;

export const StTitulo = styled.div`
  font-size: 1.2em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 2px !important;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
`;

export const StPesquisa = styled.textarea`
  width: 98.5% !important;
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
        : "rgba(255,255,255, 0.2)"} !important ;

  border-radius: 3px !important;
  border: none !important;
  outline: none !important;
  padding: 2px 3px !important;
  font-size: 0.9em !important;
  font-family: "Roboto Slab", serif !important;
  letter-spacing: 1px !important;

  :focus {
    background: #ecfcff !important;
  }
`;
