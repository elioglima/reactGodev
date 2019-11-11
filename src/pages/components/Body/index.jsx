import React, { useRef, useState } from "react";

import { StContainer, StBase } from "./styles";

const Objeto = props => {
  return (
    <StContainer
      background={props.background ? props.background : null}
      color={props.color ? props.color : null}
    >
      {props.banner && props.banner({ height: props.bannerHeight })}
      <StBase
        paddingVertical={props.paddingVertical}
        paddingHorizontal={props.paddingHorizontal}
        flexDirection={props.flexDirection ? props.flexDirection : "row"}
      >
        {props.children && props.children}
      </StBase>
    </StContainer>
  );
};

export default Objeto;
