import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StContainer } from "./styles";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ListaDestaques from "../components/listaDestaques";
import ListaIcones from "../components/listaIcones";

const theme = "dark";

const Objeto = () => {
  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Body banner={Banner} paddingVertical={"0"} paddingHorizontal={"5%"}>
        <ListaIcones />
        <ListaDestaques theme={theme} colCount={2} />
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
