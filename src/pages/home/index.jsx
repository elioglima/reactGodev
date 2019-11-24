import React, { useEffect } from "react";
import { StContainer } from "./styles";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container from "../container";
import ListaDestaques from "../components/listaDestaques";
import ListaIcones from "../components/listaIcones";
const Objeto = () => {
  return (
    <Container>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Body banner={Banner} paddingVertical={"0"} paddingHorizontal={"5%"}>
        <ListaIcones />
        <ListaDestaques colCount={2} />
      </Body>
      <Footer />
    </Container>
  );
};

export default Objeto;
