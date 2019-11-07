import React from "react";
import { StContainer } from "./styles";
import Header from "./components/Header";
import Body from "../components/Body";
import Banner from "./components/Banner";
import Footer from "../components/Footer";
import ListaDestaques from "../components/listaDestaques";
import ListaIcones from "../components/listaIcones";

const Objeto = () => {
  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Body banner={Banner}>
        <ListaIcones />
        <ListaDestaques width="80%" />
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;