import React, { useState, useEffect } from "react";
import { StContainer, StTitulo, StDescritivo } from "./styles";
import Navigation from "./Navigation";
import Content from "./Content";

const Objeto = props => {
  const [registro, setRegistro] = useState({});
  const [stepCurr, setStepCurr] = useState(0);
  useEffect(() => setRegistro(props.dados), [props.dados]);

  const setStep = v => {
    if (v < 0) return;
    if (v > registro.stepsCount) return;
    setStepCurr(v); // navega entre as steps
  };

  return (
    <StContainer {...props}>
      <Navigation
        {...props}
        registro={registro}
        stepCurr={stepCurr}
        setStep={setStep}
      />
      <Content
        {...props}
        registro={registro}
        stepCurr={stepCurr}
        setStep={setStep}
      />
    </StContainer>
  );
};

export default Objeto;
