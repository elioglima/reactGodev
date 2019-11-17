import React, { useEffect, useState } from "react";
import { StContainer, StTitulo, StTexto, StBase } from "./styles";
import TextArea from "../../../../../components/Generics/TextArea";
import ToolsEdicao from "./ToolsEdicao";

const Objeto = props => {
  const TextoWrap = texto => {
    return texto.split("\n").map(i => {
      return <StTexto>{i}</StTexto>;
    });
  };

  if (!props.registro.steps) return <div />;
  return (
    <StContainer {...props}>
      {(props.editandoRegistro || props.inserindoRegistro) && <ToolsEdicao />}
      {props.registro.steps[props.stepCurr - 1].map((reg, index) => {
        console.log(index, props.registro.steps[props.stepCurr - 1][index]);
        return (
          <StBase key={"StBase" + index}>
            {props.registro.steps[props.stepCurr - 1][index].titulo && (
              <StTitulo key={"StBaseTitulo" + index}>
                {props.registro.steps[props.stepCurr - 1][index].titulo}
              </StTitulo>
            )}

            {props.editandoRegistro || props.inserindoRegistro ? (
              <TextArea
                key={"StBaseTextArea" + index}
                value={props.registro.steps[props.stepCurr - 1][index].texto}
                width={"90%"}
                rows={
                  props.registro.steps[props.stepCurr - 1][index].texto.split(
                    "\n"
                  ).length
                }
                onValue={value => {
                  props.registro.steps[props.stepCurr - 1][index].texto = value;
                }}
              />
            ) : (
              TextoWrap(props.registro.steps[props.stepCurr - 1][index].texto)
            )}
          </StBase>
        );
      })}
    </StContainer>
  );
};

export default Objeto;
