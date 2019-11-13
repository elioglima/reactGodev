import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StContainer } from "./styled";

const TextInput = props => {
  const [theme, setTheme] = useState("light");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => props.theme && setTheme(props.theme), [props.theme]);
  useEffect(() => setValue(props.value), [props.value]);
  useEffect(() => setValue(props.value), [props.value]);
  useEffect(() => setPlaceholder(props.placeholder), [props.placeholder]);
  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <StContainer theme={theme} width={props.width}>
      {props.titulo && <span>{props.titulo}</span>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
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
