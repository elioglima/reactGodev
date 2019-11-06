import React from 'react';
import { StContainer, StTitulo, StDescritivo } from './styles'

const Objeto = (props) => {
  return (
    <StContainer>
      <StTitulo>{props.titulo}</StTitulo>
      <StDescritivo>{props.descritivo}</StDescritivo>
    </StContainer>
  );
};

export default Objeto;