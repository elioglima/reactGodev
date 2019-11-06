import React, { useRef, useState } from 'react';

import {
  StContainer,
  StBase,
} from './styles'

const Objeto = (props) => {
  return (
    <StContainer>
      {props.banner && props.banner()}
      <StBase>
        {props.children}
      </StBase>
    </StContainer>

  )
};

export default Objeto;