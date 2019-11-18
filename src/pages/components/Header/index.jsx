import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import {
  StContainer,
  StTitulo,
  StDescritivo,
  StBase1,
  StInscreverSe,
  StPesquisa,
  StPesquisaBaseInput
} from "./styles";

const Objeto = props => {
  const dispatch = useDispatch();
  const [pesquisa, setPesquisa] = useState("");
  const refPesquisa = useRef();
  return (
    <StContainer>
      <StBase1>
        <StTitulo onClick={() => dispatch(push("/"))}>{props.titulo}</StTitulo>
        <StDescritivo>{props.descritivo}</StDescritivo>
      </StBase1>
      {props.MenuRight &&
        props.MenuRight.map((r, i) => {
          return (
            <StInscreverSe key={"StInscreverSeHeader" + i} onClick={r.onClick}>
              {r.title}
            </StInscreverSe>
          );
        })}
      {/* <StInscreverSe onClick={() => dispatch(push('/postagem/edicao'))}>Edição</StInscreverSe> */}
      <StPesquisa>
        <StPesquisaBaseInput pesquisa={pesquisa}>
          <input
            type="text"
            ref={refPesquisa}
            onChange={e => setPesquisa(e.target.value)}
            value={pesquisa}
          />
          <i
            className="fas fa-search fa-5x"
            aria-hidden="true"
            onClick={() => refPesquisa.current.focus()}
          ></i>
        </StPesquisaBaseInput>
      </StPesquisa>
    </StContainer>
  );
};

export default Objeto;
