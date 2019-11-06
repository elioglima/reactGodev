import React, { useRef, useState } from 'react';

import {
  StContainer,
} from './styles'

const Objeto = (props) => {
  return (
    <StContainer>
      <div>suporte@godevs.com</div>
      <div>
        <a href='https://www.facebook.com/isdev' target='_blank'>
          <i className="fab fa-facebook-f" aria-hidden="true" />
        </a>
        <a href='https://github.com/elioglima' target='_blank'>
          <i className="fab fa-github" aria-hidden="true" />
        </a>
      </div>
    </StContainer>
  );
};

export default Objeto;