import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EdicaoLista,
  EdicaoSelectID
} from "../../../../redux/actions/postagemEdicao";

import DataGrid from "../../../components/Generics/DataGrid";
import { StContainer } from "./styles";

const DataGridColunas = [
  {
    name: "id",
    title: "Código",
    width: "10%"
  },
  {
    name: "title",
    title: "Titulo",
    width: "70%"
  },
  {
    name: "category",
    title: "Categoria",
    width: "10%"
  }
];

const Objeto = props => {
  const dispatch = useDispatch();
  const postagemEdicao = useSelector(state => state.PostagemEdicao);
  const [listaPostagem, setListaPostagem] = useState([]);
  const [theme, setTheme] = useState("");

  useEffect(() => setTheme(props.theme), [props.theme]);
  useEffect(() => {
    if (postagemEdicao.id > 0) return;
    dispatch(EdicaoLista());
  }, []);

  useEffect(() => {
    if (postagemEdicao.id > 0) return;
    if (postagemEdicao.Lista.length === 0) return;
    setListaPostagem(postagemEdicao.Lista);
  }, [postagemEdicao]);

  const onClickEditar = (r, c, comp) => {
    dispatch(EdicaoSelectID({ id: r.id }));
  };

  return (
    <StContainer>
      <DataGrid
        theme={theme}
        widthAuto={false}
        dgColunas={DataGridColunas}
        dgLinhas={listaPostagem}
        onClickLinha={onClickEditar}
      />
    </StContainer>
  );
};

export default Objeto;
