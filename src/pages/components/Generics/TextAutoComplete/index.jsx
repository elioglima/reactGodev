import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  StContainer,
  StBase,
  StIcone,
  StTitulo,
  StPesquisa,
  StAutoComplete,
  StLinha,
  StSelecaoAutoComplete
} from "./styled";

export const useMountEffect = fun => useEffect(fun, []);

const TextInput = props => {
  const inputPesq = useRef();
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [dados, setDados] = useState("");
  const [baseDados, setBaseDados] = useState("");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [mouseEnterAutoComplete, setMouseEnterAutoComplete] = useState(false);
  const [focus, setFocus] = useState(false);
  const itemsRef = useRef([]);

  useEffect(() => {
    setBaseDados(props.dados);
    setDados(props.dados);
  }, [props.dados]);

  useEffect(() => {
    if (!props.value) return;
    setValue(props.value);
  }, [props.value]);

  useEffect(() => setPlaceholder(props.placeholder), [props.placeholder]);
  useEffect(() => props.onValue && props.onValue(value), [value]);

  const setFiltro = valueTemp => {
    setDados(
      baseDados.filter(
        f => f.value.toLowerCase().indexOf(valueTemp.toLowerCase()) != -1
      )
    );
  };
  const onChange = e => {
    let valueTemp = e.target.value;
    setValue(valueTemp);
    setFiltro(valueTemp);

    itemsRef.current = itemsRef.current.slice(0, dados.length);
    setOpenAutoComplete(dados.length > 0);
  };

  const onKeyDown = e => {};

  const onClickIcone = e => {
    setOpenAutoComplete(!openAutoComplete);
  };

  const onKeyDownInputPesq = (e, count, i, r) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      setOpenAutoComplete(false);
      setValue(e.target.value);
      return;
    }

    // para baixo
    if (e.keyCode === 40 || e.keyCode === 9) {
      if (i >= count - 1) return itemsRef.current[0].focus();
      return itemsRef.current[i + 1].focus();
    }

    // para cima
    if (e.keyCode === 38) {
      if (i === 0) return inputPesq.current.focus();
      return itemsRef.current[i - 1].focus();
    }

    // backspace
    if (e.keyCode === 8) {
      let valueTemp = value.substr(0, value.length - 1);
      setValue(valueTemp);
      setFiltro(valueTemp);
      inputPesq.current.focus();
      return;
    }

    let valueTemp = value + e.key;
    setValue(valueTemp);
    setFiltro(valueTemp);
    inputPesq.current.focus();
  };

  const onClick = e => {
    e.preventDefault();
    setOpenAutoComplete(false);
    setValue(e.target.value);
  };

  const onFocus = e => {
    setFocus(true);
  };

  const onMouseLeave = () => {
    // setTimeout(() => {
    //   openAutoComplete && setOpenAutoComplete(false);
    // }, 300);
  };

  const onBlur = () => {
    setFocus(false);
    setTimeout(() => {
      let temFocus = false;
      for (let index = 0; index < dados.length; index++) {
        if (!temFocus)
          temFocus = itemsRef.current[index] == document.activeElement;
      }
      console.log(temFocus);
      if (openAutoComplete && !temFocus) setOpenAutoComplete(false);
    }, 300);
  };

  return (
    <StContainer width={props.width} onMouseLeave={onMouseLeave}>
      {props.titulo && <StTitulo>{props.titulo}</StTitulo>}

      <StBase openAutoComplete={openAutoComplete} focus={focus}>
        <StPesquisa
          openAutoComplete={openAutoComplete}
          focus={focus}
          type="text"
          ref={inputPesq}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
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
            return (
              <StLinha key={"StLinhaTextAutoComplete" + i}>
                <StSelecaoAutoComplete
                  key={"StSelecaoAutoComplete" + i}
                  ref={el => (itemsRef.current[i] = el)}
                  value={r.title}
                  onKeyDown={e => onKeyDownInputPesq(e, dados.length, i, r)}
                  onClick={onClick}
                  readOnly
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
