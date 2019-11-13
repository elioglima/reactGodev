import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StContainer, StLinha } from "./styles";
import TextInput from "../../../components/Generics/TextInput";
import TextAutoComplete from "../../../components/Generics/TextAutoComplete";

const Objeto = props => {
  const dispatch = useDispatch();
  const postagemSelecionada = useSelector(
    state => state.PostagemEdicao.Selecionado
  );
  const [theme, setTheme] = useState("");
  useEffect(() => setTheme(props.theme), [props.theme]);

  return (
    <StContainer>
      <StLinha>
        <TextInput
          value={postagemSelecionada.title}
          titulo={"Título"}
          width={"50%"}
        />
        <TextAutoComplete
          dados={[
            { value: "React-Js", title: "React-Js" },
            { value: "React-Native", title: "React-Native" },
            { value: "Node-Js", title: "Node-Js" },
            { value: "Golang", title: "Golang" }
          ]}
          value={postagemSelecionada.category}
          titulo={"Categoria"}
        />
        <TextInput value={postagemSelecionada.autor} titulo={"Autor"} />
      </StLinha>
    </StContainer>
  );
};

export default Objeto;
