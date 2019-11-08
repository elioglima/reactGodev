import React, { useState, useEffect } from "react";
import BoxItem from "./boxItem";
import { StContainer, StLista, StTitulo } from "./styles";

const JsonData = require("../../../temp/ListaPostagem.json");

const Objeto = props => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    setDados(JsonData);
  }, []);

  return (
    <StContainer style={{ width: props.width }} theme={props.theme} >
      {props.titulo && <StTitulo theme={props.theme}>{props.titulo}</StTitulo>}
      <StLista theme={props.theme}>
        {dados.map(dados => {
          return <BoxItem dados={dados} theme={props.theme} colCount={props.colCount} />;
        })}
      </StLista>
    </StContainer>
  );
};

export default Objeto;
