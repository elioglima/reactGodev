import React from "react";

import { StContainer } from "./styles";
import StepCurrents from "./StepCurrents";
import Biografia from "./Biografia";

const Objeto = props => {
  return (
    <StContainer {...props}>
      {props.stepCurr === 0 && <Biografia {...props} />}
      {props.stepCurr > 0 && <StepCurrents {...props} />}
    </StContainer>
  );
};

export default Objeto;
