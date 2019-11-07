import React from "react";
import Icon from './icon'
import { StContainer } from "./styles";

const ListaIcones = (props) => {
  return (
    <StContainer theme={props.theme} >
      <Icon src={require("../../../tools/img/ico_golang.png")} id={1} route={'/historia'} size={15} theme={props.theme} />
      <Icon src={require("../../../tools/img/ico_react.png")} id={3} route={'/historia'} size={13} theme={props.theme} />
      <Icon src={require("../../../tools/img/ico_nodejs.png")} id={2} route={'/historia'} size={11} theme={props.theme} />
    </StContainer>
  );
};

export default ListaIcones;
