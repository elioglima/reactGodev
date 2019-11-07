import React from "react";
import { StContainer, StTitulo, StDescritivo } from "./styles";

const Objeto = props => {
  console.log(props);
  return (
    <StContainer {...props}>
      <img src={require("../../../../tools/img/banner1.jpg")} />
    </StContainer>
  );
};

export default Objeto;
