import React, { useRef, useState } from 'react';

import {
  StContainer,
  StTitulo,
  StDescritivo,
  StBase1,
  StInscreverSe,
  StPesquisa,
  StPesquisaBaseInput
} from './styles'

const Objeto = (props) => {
  const [pesquisa, setPesquisa] = useState('')
  const refPesquisa = useRef()
  return (
    <StContainer>
      <StBase1>
        <StTitulo>{props.titulo}</StTitulo>
        <StDescritivo>{props.descritivo}</StDescritivo>
      </StBase1>
      <StInscreverSe>Inscrever-se</StInscreverSe>
      <StPesquisa>
        <StPesquisaBaseInput pesquisa={pesquisa} >
          <input type='text' ref={refPesquisa} onChange={e => setPesquisa(e.target.value)} value={pesquisa} />
          <i class="fas fa-search fa-5x" aria-hidden="true" onClick={() => refPesquisa.current.focus()} ></i>
        </StPesquisaBaseInput>
      </StPesquisa>
    </StContainer>
  );
};

export default Objeto;