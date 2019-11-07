import React from 'react';
import { StContainer, StBiografia } from "./styles";

const Objeto = (props) => {
  return (
    <StContainer {...props}>
      <StBiografia>
        <div>
          <span>Conteudo</span>
        </div>
      </StBiografia>
    </StContainer>
  );
};

export default Objeto;