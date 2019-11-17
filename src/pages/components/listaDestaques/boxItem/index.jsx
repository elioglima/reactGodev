import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { StContainer } from "./styles";

const Objeto = ({ dados, theme, colCount }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(push("/postagem", { postagem: dados }));

  return (
    <StContainer theme={theme} colCount={colCount} onClick={onClick}>
      <div>
        <span>{dados.title}</span>
        <span>{dados.descriptions}</span>
      </div>
      <span>{dados.category}</span>
    </StContainer>
  );
};

export default Objeto;
