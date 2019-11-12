import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  StContainer,
  StBase,
  StIcone,
  StAutoComplete,
  StLinha
} from "./styled";

export const useMountEffect = fun => useEffect(fun, []);

const TextInput = props => {
  const [theme, setTheme] = useState("light");
  const inputPesq = useRef();

  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [dados, setDados] = useState("");
  const [baseDados, setBaseDados] = useState("");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => props.theme && setTheme(props.theme), [props.theme]);
  useEffect(() => {
    setBaseDados(props.dados);
    setDados(props.dados);
  }, [props.dados]);

  useEffect(() => setValue(props.value), [props.value]);
  useEffect(() => setPlaceholder(props.placeholder), [props.placeholder]);

  const onChange = e => {
    let valueTemp = e.target.value;
    setValue(valueTemp);
    setDados(
      baseDados.filter(
        f => f.value.toLowerCase().indexOf(valueTemp.toLowerCase()) != -1
      )
    );

    setOpenAutoComplete(dados.length > 0);
  };

  const onFocus = e => {};
  const onBlur = e => {
    // setOpenAutoComplete(false);
  };
  const onKeyDown = e => {};

  const onClickIcone = e => {
    setOpenAutoComplete(!openAutoComplete);
  };

  const onKeyDownInputPesq = (e, direcionarFocus) => {
    // inputPesq.current.focus();
    if (!direcionarFocus) return;
    e.preventDefault();
    if (e.keyCode === 9) inputPesq.current.focus();
  };

  return (
    <StContainer theme={theme}>
      {props.titulo && <span>{props.titulo}</span>}

      <StBase theme={theme}>
        <input
          type="text"
          ref={inputPesq}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
        <StIcone
          openAutoComplete={openAutoComplete}
          className={
            openAutoComplete ? "fa fa-chevron-down" : "fa fa-chevron-up"
          }
          aria-hidden="true"
          onClick={onClickIcone}
        />
      </StBase>

      <StAutoComplete openAutoComplete={openAutoComplete}>
        {dados &&
          dados.map((r, i) => {
            console.log(i);
            return (
              <StLinha>
                <input
                  value={r.title}
                  onKeyDown={e => onKeyDownInputPesq(e, i === dados.length - 1)}
                  // ref={i === -1 ? inputFirst : null}
                />
              </StLinha>
            );
          })}
      </StAutoComplete>
    </StContainer>
  );
};

TextInput.propTypes = {
  dados: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  titulo: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;
