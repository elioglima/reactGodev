import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxItem from "./boxItem";
import { StContainer, StLista, StTitulo } from "./styles";
import { acPostagemLista } from "../../../redux/actions/postagem/actionLista";

const Objeto = props => {
  const dispatch = useDispatch();
  const [dados, setDados] = useState([]);
  const registros = useSelector(state => state.postagens.registros);

  useEffect(() => {
    registros && setDados(registros);
  }, [registros]);

  useEffect(() => {
    dispatch(acPostagemLista({}));
  }, []);

  return (
    <StContainer style={{ width: props.width }} theme={props.theme}>
      {props.titulo && <StTitulo theme={props.theme}>{props.titulo}</StTitulo>}
      <StLista theme={props.theme}>
        {dados.map((dados, index) => {
          return (
            <BoxItem
              key={"BoxItemKey" + index}
              dados={dados}
              theme={props.theme}
              colCount={props.colCount}
            />
          );
        })}
      </StLista>
    </StContainer>
  );
};

export default Objeto;
