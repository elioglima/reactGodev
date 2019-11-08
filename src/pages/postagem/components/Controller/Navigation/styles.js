import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #e7eaf6;
  border-bottom: 1px solid #113f67;
  padding: 0 5%;
`;

export const StBotao = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  color: #3c4245;

  & i {
    font-size: 1em;
    margin-left: 5px;
    margin-right: 5px;
  }

  & span {
    padding: 0 0px;
    font-size: 1em;
  }

  :hover {
    background: #a2a8d3;
    color: #fff;
  }

  :active {
    background: #38598b;
    color: #fff;
  }
`;

export const StContents = styled.div`
  width: 100%;
  align-items: center;
  border-left: 1px solid #5f6769;
  border-right: 1px solid #5f6769;
`;

export const StTitulo = styled.div`
  padding: 0 10px;
`;
