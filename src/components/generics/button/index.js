import React from "react";
import { ButtonPrimary } from "./styles";
const Button = props => {
  return (
    <ButtonPrimary
      modo={props.modo || "default"}
      modoClaro={props.modoClaro || true}
      onClick={props.onClick}
    >
      {props.text} {props.icon && <img src={props.icon} alt="icon" />}
    </ButtonPrimary>
  );
};

export default Button;
