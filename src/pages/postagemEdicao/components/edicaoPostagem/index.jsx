import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { StContainer } from "./styles";

const Objeto = props => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("");
  useEffect(() => setTheme(props.theme), [props.theme]);

  return <StContainer>sss</StContainer>;
};

export default Objeto;
