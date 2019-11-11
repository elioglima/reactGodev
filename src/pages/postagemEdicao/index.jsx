import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { StContainer } from "./styles";
import ListaPostagem from "./components/listaPostagem";
import EdicaoPostagem from "./components/edicaoPostagem";

const Objeto = () => {
  const theme = "light";
  const [idPostagem, setIdPostagem] = useState(0);
  const postagemEdicao = useSelector(state => state.PostagemEdicao);

  useEffect(() => {
    if (postagemEdicao.id === 0) return;
    setIdPostagem(postagemEdicao.id);
  }, [postagemEdicao]);

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Banner height={10} />
      <Body background={"#e5e5e5"} color={"#000"} flexDirection={"column"}>
        {idPostagem === 0 && <ListaPostagem theme={theme} />}
        {idPostagem > 0 && <EdicaoPostagem theme={theme} />}
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
