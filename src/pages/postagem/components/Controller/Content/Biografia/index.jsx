import React from "react";

import {
  StBiografia,
  StDescriptions,
  StIntroducao,
  StLinha,
  StTitulo,
  StDescr,
  StDescNotEdicao
} from "./styles";

import TextInput from "../../../../../components/Generics/TextInput";
import TextArea from "../../../../../components/Generics/TextArea";
import TextAutoComplete from "../../../../../components/Generics/TextAutoComplete";

const PostagemBiografia = props => {
  if (!props.registro) return <dib />;

  return (
    <StBiografia>
      {props.registro.stepsCount === 1 && (
        <StIntroducao>Introdução</StIntroducao>
      )}

      <StLinha>
        <StTitulo>Código</StTitulo>
        <StDescr>
          <StDescNotEdicao>{props.registro.id}</StDescNotEdicao>
        </StDescr>
      </StLinha>

      <StLinha>
        <StTitulo>Titulo</StTitulo>
        <StDescr>
          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextInput
              value={props.registro.title}
              width={"100%"}
              onValue={e => {
                props.registro.title = e;
              }}
            />
          ) : (
            <StDescNotEdicao>{props.registro.title}</StDescNotEdicao>
          )}
        </StDescr>
      </StLinha>

      <StLinha>
        <StTitulo>Categoria</StTitulo>
        <StDescr>
          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextAutoComplete
              width={"100%"}
              dados={[
                { value: "React-Js", title: "React-Js" },
                { value: "React-Native", title: "React-Native" },
                { value: "Node-Js", title: "Node-Js" },
                { value: "Golang", title: "Golang" }
              ]}
              value={props.registro.category}
              onValue={e => {
                props.registro.category = e;
              }}
            />
          ) : (
            <StDescNotEdicao>{props.registro.category}</StDescNotEdicao>
          )}
        </StDescr>
      </StLinha>

      <StLinha>
        <StTitulo>Autor</StTitulo>
        <StDescr>
          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextInput
              value={props.registro.autor}
              width={"100%"}
              onValue={e => {
                props.registro.autor = e;
              }}
            />
          ) : (
            <StDescNotEdicao>{props.registro.autor}</StDescNotEdicao>
          )}
        </StDescr>
      </StLinha>

      <StLinha>
        <StTitulo>GitHub</StTitulo>
        <StDescr>
          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextInput
              value={props.registro.github}
              width={"100%"}
              onValue={e => {
                props.registro.github = e;
              }}
            />
          ) : (
            <StDescNotEdicao>{props.registro.github}</StDescNotEdicao>
          )}
        </StDescr>
      </StLinha>

      <StLinha>
        <StDescriptions>
          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextArea
              value={props.registro.descriptions}
              width={"100%"}
              rows={
                props.registro.descriptions &&
                props.registro.descriptions.split("\n").length
              }
              onValue={value => {
                props.registro.descriptions = value;
              }}
            />
          ) : (
            <StDescNotEdicao>{props.registro.descriptions}</StDescNotEdicao>
          )}
        </StDescriptions>
      </StLinha>
    </StBiografia>
  );
};

export default PostagemBiografia;
