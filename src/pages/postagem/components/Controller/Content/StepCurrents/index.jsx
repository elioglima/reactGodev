import React, { useEffect, useState } from "react";
import { StContainer, StTitulo, StTexto, StBase } from "./styles";
import TextArea from "../../../../../components/Generics/TextArea";
import ToolsEdicao from "./ToolsEdicao";

const Objeto = props => {
  const [registroStep, setRegistroStep] = useState([]);

  useEffect(() => {
    if (props.stepCurr <= 0) return;
    let registro = props.registro.steps;
    if (registro.lenght < props.registro.stepsCount) return;
    let index = props.stepCurr - 1;
    setRegistroStep(registro[index]);
  }, [props.stepCurr]);

  const TextoWrap = texto => {
    return props.editandoRegistro || props.inserindoRegistro ? (
      <TextArea value={texto} width={"90%"} rows={texto.split("\n").length} />
    ) : (
      texto.split("\n").map(i => {
        return <StTexto>{i}</StTexto>;
      })
    );
  };

  if (!registroStep) return <div />;
  return (
    <StContainer {...props}>
      {(props.editandoRegistro || props.inserindoRegistro) && <ToolsEdicao />}
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
