import React, { useEffect, useState } from "react";
import { StContainer, StTitulo, StTexto, StBase } from "./styles";

const Objeto = props => {
  const [registroStep, setRegistroStep] = useState([]);

  useEffect(() => {
    if (props.stepCurr <= 0) return;
    let registro = props.registro.steps;
    if (registro.lenght < props.registro.stepsCount) return;
    let index = props.stepCurr - 1;
    console.log(registro, index)
    setRegistroStep(registro[index]);
  }, [props.stepCurr]);

  const TextoWrap = texto => {
    return texto.split("\n").map(i => {
      return <StTexto>{i}</StTexto>;
    });
  };

  if (!registroStep) return <div />;
  return (
    <StContainer {...props}>
      {registroStep.map(reg => {
        return (
          <StBase>
            {reg.titulo && <StTitulo>{reg.titulo}</StTitulo>}
            {TextoWrap(reg.texto)}
          </StBase>
        );
      })}
    </StContainer>
  );
};

export default Objeto;
