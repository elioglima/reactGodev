import React, { useEffect, useState } from "react";
import { StContainer, StTitulo, StTexto } from "./styles";

const Objeto = props => {
  const [registroStep, setRegistroStep] = useState({});

  useEffect(() => {
    if (props.stepCurr <= 0) return;
    let registro = props.registro.steps;
    if (registro.lenght < props.registro.stepsCount) return;
    let index = props.stepCurr - 1;
    setRegistroStep(registro[index]);
  }, [props.stepCurr]);

  return (
    <StContainer {...props}>
      <StTitulo>{registroStep.titulo}</StTitulo>
      <StTexto>{registroStep.texto}</StTexto>
    </StContainer>
  );
};

export default Objeto;
