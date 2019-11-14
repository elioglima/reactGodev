import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StContainer, StTitulo, StPesquisa } from "./styled";

const TextArea = props => {
  const [theme, setTheme] = useState("light");
  const [rows, setRows] = useState(1);
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => props.theme && setTheme(props.theme), [props.theme]);
  useEffect(() => setValue(props.value), [props.value]);
  useEffect(() => setValue(props.value), [props.value]);
  useEffect(() => setPlaceholder(props.placeholder), [props.placeholder]);
  useEffect(() => setRows(props.rows), []);
  useEffect(() => props.onValue && props.onValue(value), [value]);

  const onChange = e => {
    setRows(e.target.value.split("\n").length);
    setValue(e.target.value);
  };

  return (
    <StContainer theme={theme} width={props.width}>
      {props.titulo && <StTitulo theme={theme}>{props.titulo}</StTitulo>}
      <StPesquisa
        theme={theme}
        width={props.width}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StContainer>
  );
};

TextArea.propTypes = {
  titulo: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
  // width: PropTypes.string
};

// TextArea.defaultProps = {
//   width: '',
// };

export default TextArea;
