import React from 'react';
import { StContainer, StBiografia } from "./styles";
import StepCurrents from "./StepCurrents";

const Biografia = (props) => {
  return (
    <StBiografia>
      <div>
        <span>Código</span>
        <span>Titulo</span>
        <span>Categoria</span>
        <span>Autor</span>
        <span>Referências</span>
        <span>Descrição</span>
      </div>
      <div>
        <span>{props.registro.id}</span>
        <span>{props.registro.title}</span>
        <span>{props.registro.category}</span>
        <span>{props.registro.autor}</span>
        <span>{props.registro.refs}</span>
        <span>{props.registro.descriptions}</span>
      </div>
    </StBiografia>
  )
}

const Objeto = (props) => {

  return (
    <StContainer {...props}>

      {props.stepCurr === 0 && <Biografia {...props} />}
      {props.stepCurr > 0 && <StepCurrents {...props} />}

    </StContainer>
  );
};

export default Objeto;