import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StContainer } from "./styles";
import TextInput from "../../../components/Generics/TextInput";

const Objeto = props => {
  const dispatch = useDispatch();
  const postagemSelecionada = useSelector(
    state => state.PostagemEdicao.Selecionado
  );
  const [theme, setTheme] = useState("");
  useEffect(() => setTheme(props.theme), [props.theme]);

  return (
    <StContainer>
      <TextInput value={postagemSelecionada.title} placeholder={""} />
      <TextInput value={"teste"} placeholder={""} />
      <TextInput value={"teste"} placeholder={""} />
      <TextInput value={"teste"} placeholder={""} />
      <TextInput value={"teste"} placeholder={""} />
    </StContainer>
  );
};

export default Objeto;
