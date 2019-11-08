import React from "react";
import {
  StContainer,
  StBiografia,
  StDescriptions,
  StIntroducao
} from "./styles";

import StepCurrents from "./StepCurrents";

const Biografia = props => {
  return (
    <StBiografia>
      {props.registro.stepsCount === 1 && (
        <StIntroducao>Introdução</StIntroducao>
      )}
      <div>
        <div>
          <span>Código</span>
          <span>Titulo</span>
          <span>Categoria</span>
          <span>Autor</span>
          <span>Referências</span>
        </div>
        <div>
          <span>{props.registro.id}</span>
          <span>{props.registro.title}</span>
          <span>{props.registro.category}</span>
          <span>{props.registro.autor}</span>
          <span>{props.registro.refs}</span>
        </div>
      </div>
      <StDescriptions>{props.registro.descriptions}</StDescriptions>
    </StBiografia>
  );
};

const Objeto = props => {
  return (
    <StContainer {...props}>
      {props.stepCurr === 0 && <Biografia {...props} />}
      {props.stepCurr > 0 && <StepCurrents {...props} />}
    </StContainer>
  );
};

export default Objeto;
