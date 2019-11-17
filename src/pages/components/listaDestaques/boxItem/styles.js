import styled from "styled-components";
import { getTheme } from "../../../../assets/theme";

export const StContainer = styled.div`
  background: ${props => getTheme(props.theme).backgroundPrimary};
  box-shadow: 1px 2px 7px 1px ${props => getTheme(props.theme).boxShadowPrimary};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 2% 10px 0;
  padding-top: 20px;
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 20px;

  ${props =>
    props.colCount && props.colCount > 0
      ? "width:" + (100 / props.colCount - 4) + "%;"
      : "100%"};

  & > span {
    color: ${props => getTheme(props.theme).colorNivel1};
    font-size: 1rem;
    margin-top: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > span {
      &:first-child {
        color: ${props => getTheme(props.theme).colorNivel2};
        font-weight: bolder;
        font-size: 1.1rem;
        margin-bottom: 10px;
      }
      &:not(:first-child) {
        color: ${props => getTheme(props.theme).colorNivel3};
        text-align: justify;
      }
    }
  }
`;
