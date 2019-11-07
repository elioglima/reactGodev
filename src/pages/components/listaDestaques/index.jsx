import React, { useState, useEffect } from "react";
import BoxItem from "./boxItem";
import { StContainer, StLista, StTitulo } from "./styles";

const JsonData = require("../../../temp/listaDestaques.json");

const Objeto = props => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    setDados(JsonData);
  }, []);

  return (
    <StContainer style={{ width: props.width }}>
      {props.titulo && <StTitulo>{props.titulo}</StTitulo>}
      <StLista>
        {dados.map(dados => {
          return <BoxItem dados={dados} />;
        })}
      </StLista>
    </StContainer>
  );
};

export default Objeto;