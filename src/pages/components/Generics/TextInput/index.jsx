import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StContainer, StTitulo, StPesquisa } from "./styled";

const TextInput = props => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

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
    <StContainer
      width={props.width}
      margin={props.margin ? props.margin : false}
    >
      {props.titulo && <StTitulo>{props.titulo}</StTitulo>}
      <StPesquisa
        padding={props.inputPadding ? props.inputPadding : false}
        type="text"
        value={value ? value : ""}
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
