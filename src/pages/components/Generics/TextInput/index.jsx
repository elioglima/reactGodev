import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StContainer, StTitulo, StPesquisa } from "./styled";

const TextInput = props => {
  const [theme, setTheme] = useState("light");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => props.theme && setTheme(props.theme), [props.theme]);
  useEffect(() => {
    if (!props.value) return;
    if (props.value !== value) setValue(props.value);
  }, [props.value]);

  useEffect(() => setPlaceholder(props.placeholder), [props.placeholder]);

  const onChange = e => {
    setValue(e.target.value);
    props.onValue && props.onValue(value);
  };

  return (
    <StContainer theme={theme} width={props.width}>
      {props.titulo && <StTitulo theme={theme}>{props.titulo}</StTitulo>}
      <StPesquisa
        type="text"
        value={value ? value : ""}
        placeholder={placeholder}
        onChange={onChange}
        theme={theme}
      />
    </StContainer>
  );
};

TextInput.propTypes = {
  titulo: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
  // width: PropTypes.string
};

// TextInput.defaultProps = {
//   width: '',
// };

export default TextInput;
