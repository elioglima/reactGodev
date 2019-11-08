import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { EdicaoLista } from "../../redux/actions/postagemEdicao";

import {
  StContainer,
} from "./styles";

const Objeto = () => {
  const theme = 'light'
  const dispatch = useDispatch()
  const postagemEdicao = useSelector(state => state.PostagemEdicao)
  const [listaPostagem, setListaPostagem] = useState([])

  useEffect(() => {
    dispatch(EdicaoLista())
  }, [])

  useEffect(() => {
    if (postagemEdicao.Lista.length == 0) return
    setListaPostagem(postagemEdicao.Lista)
    console.log('listaPostagem', listaPostagem, postagemEdicao.Lista)
  }, [postagemEdicao])

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Banner height={10} />
      <Body
        background={"#e5e5e5"}
        color={"#000"}
      >
        {listaPostagem.map((item, key) => (<div key={key}>{item.title}</div>))}
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
