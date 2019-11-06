import React from 'react';
import { StContainer } from './styles';

const Objeto = ({ dados }) => {
  return (
    <StContainer>
      <div>
        <span>
          {dados.title}
        </span>
        <span>
          {dados.descriptions}
        </span>
      </div>
      <span>
        {dados.category}
      </span>
    </StContainer>
  );
};

export default Objeto;