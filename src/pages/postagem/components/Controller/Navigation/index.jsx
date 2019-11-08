import React from "react";
import { StContainer, StBotao, StContents, StTitulo } from "./styles";

const Objeto = props => {
  const onBackStep = () => props.setStep(props.stepCurr - 1);
  const onSendStep = () => props.setStep(props.stepCurr + 1);
  return (
    <StContainer>
      <StBotao onClick={onBackStep} ativo={props.stepCurr + 1 > 1}>
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
        <span>Voltar</span>
      </StBotao>
      <StContents>
        <StTitulo>{props.stepCurr}</StTitulo>
        <StTitulo>{props.registro.title}</StTitulo>
        <StTitulo>{props.registro.category}</StTitulo>
      </StContents>
      <StBotao
        onClick={onSendStep}
        ativo={props.stepCurr < props.registro.stepsCount}
      >
        <span>Proximo</span>
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </StBotao>
    </StContainer>
  );
};

export default Objeto;
