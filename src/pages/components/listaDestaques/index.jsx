import React, { useState, useEffect } from 'react';
import BoxItem from './boxItem'
import { StContainer } from './styles';

const JsonData = require('../../../temp/listaDestaques.json')

const Objeto = (props) => {

  const [dados, setDados] = useState([])
  useEffect(() => {
    setDados(JsonData)
  }, [])

  return (
    <StContainer style={{ width: props.width }}>
      {dados.map(dados => {
        return <BoxItem dados={dados} />
      })}
    </StContainer>
  );
};

export default Objeto;