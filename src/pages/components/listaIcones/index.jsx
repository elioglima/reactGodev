import React from "react";
import { StContainer, StImgReact, StImgGolang, StImgNodeJs } from "./styles";

const listaIcones = () => {
  return (
    <StContainer>
      <StImgGolang>
        <img src={require("../../../tools/img/ico_golang.png")} />
      </StImgGolang>
      <StImgReact>
        <img src={require("../../../tools/img/ico_react.png")} />
      </StImgReact>
      <StImgNodeJs>
        <img src={require("../../../tools/img/ico_nodejs.png")} />
      </StImgNodeJs>
    </StContainer>
  );
};

export default listaIcones;
