import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 5%;
  justify-content: space-between;
  background: rgba(20, 20, 20);
`;

export const StTitulo = styled.div`
  display: flex;
  color: #fff;
  font-family: "Audiowide", cursive;
  font-size: 40px;
  letter-spacing: 1px;
  cursor: pointer;
  :hover {
    color: #f9f9f9;
  }

  :active {
    color: #c8e6f5;
  }
`;

export const StDescritivo = styled.div`
  display: flex;
  color: #babfbc;
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
`;
export const StBase1 = styled.div`
  display: flex;
  color: #babfbc;
  font-family: "Amaranth", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  flex-direction: column;
  width: auto;
`;

export const StInscreverSe = styled.div`
  display: flex;
  color: #3dd1ec;
  font-family: "Amaranth", sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  align-items: center;
  text-transform: uppercase;
  margin: 0;

  cursor: pointer;
  &::selection {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  &:hover {
    color: #a9d3ff;
  }
`;

export const StPesquisa = styled.div`
  display: flex;
  color: #babfbc;
  font-family: "Amaranth", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  align-items: center;
`;
export const StPesquisaBaseInput = styled.div`
  display: flex;
  background: ${props => (props.pesquisa.length > 0 ? "#323332" : "#000")};
  border: 1px;
  height: 20px;
  border-radius: 5px;
  padding: 5px;

  & input {
    background: ${props => (props.pesquisa.length > 0 ? "#323332" : "#000")};
    color: #babfbc;
    font-family: "Amaranth", sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 5px;
    outline: none;
    border: none;

    &:focus {
      background: #323332;
    }
  }

  &:focus-within {
    background: #323332;
  }

  & i {
    cursor: pointer;
    margin-top: 2px;
    font-size: 15px;
  }
`;
