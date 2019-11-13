import React from "react";
import {
  StContainer,
  StBiografia,
  StDescriptions,
  StIntroducao
} from "./styles";

import StepCurrents from "./StepCurrents";
import TextInput from "../../../../components/Generics/TextInput";
import TextAutoComplete from "../../../../components/Generics/TextAutoComplete";

const Biografia = props => {
  return (
    <StBiografia>
      {props.registro.stepsCount === 1 && (
        <StIntroducao>Introdução</StIntroducao>
      )}
      <div>
        <div>
          <span>Código</span>
          <span>Titulo</span>
          <span>Categoria</span>
          <span>Autor</span>
          <span>Referências</span>
        </div>
        <div>
          {/* editandoRegistro={props.editandoRegistro} */}
          {/* inserindoRegistro={props.inserindoRegistro} */}
          <span>{props.registro.id}</span>

          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextInput value={props.registro.title} width={"100%"} />
          ) : (
            <span>{props.registro.title}</span>
          )}

          {props.editandoRegistro || props.inserindoRegistro ? (
            <TextAutoComplete
              dados={[
                { value: "React-Js", title: "React-Js" },
                { value: "React-Native", title: "React-Native" },
                { value: "Node-Js", title: "Node-Js" },
                { value: "Golang", title: "Golang" }
              ]}
              value={props.registro.category}
            />
          ) : (
            <span>{props.registro.category}</span>
          )}

          <span>{props.registro.category}</span>
          <span>{props.registro.autor}</span>
          <span>{props.registro.refs}</span>
        </div>
      </div>
      <StDescriptions>{props.registro.descriptions}</StDescriptions>
    </StBiografia>
  );
};

const Objeto = props => {
  return (
    <StContainer {...props}>
      {props.stepCurr === 0 && <Biografia {...props} />}
      {props.stepCurr > 0 && <StepCurrents {...props} />}
    </StContainer>
  );
};

export default Objeto;
