import React from "react";
import { StContainer, StBotao, StContents, StTitulo } from "./styles";

const Objeto = props => {
  const onBackStep = () => props.setStep(props.stepCurr - 1);
  const onSendStep = () => props.setStep(props.stepCurr + 1);
  return (
    <StContainer>
      <StBotao onClick={onBackStep} ativo={props.stepCurr + 1 > 1}>
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
        <span>Voltar</span>
      </StBotao>
      <StContents>
        <StTitulo>{props.stepCurr}</StTitulo>
        <StTitulo>{props.registro.title}</StTitulo>
        <StTitulo>{props.registro.category}</StTitulo>
      </StContents>

      {props.stepCurr >= props.registro.stepsCount - 1 &&
      (props.editandoRegistro || props.inserindoRegistro) ? (
        <StBotao ativo={true}>
          <span>Adicionar</span>
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </StBotao>
      ) : (
        <StBotao
          onClick={e => {
            props.stepCurr < props.registro.stepsCount - 1 && onSendStep(e);
          }}
          ativo={props.stepCurr < props.registro.stepsCount}
        >
          <span>Proximo</span>
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </StBotao>
      )}
    </StContainer>
  );
};

export default Objeto;
