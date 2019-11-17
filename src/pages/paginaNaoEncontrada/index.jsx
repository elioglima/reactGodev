import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Button from "../../components/generics/button";

import { StContainer, StTitulo, StBase } from "./styles";

const Objeto = () => {
  const metrics = useSelector(state => state.metrics);
  return (
    <StContainer theme={metrics.theme}>
      <Header
        theme={metrics.theme}
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Banner height={10} />
      <Body
        paddingVertical={"0"}
        paddingHorizontal={"5%"}
        height={"100%"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <StBase theme={metrics.theme}>
          <StTitulo theme={metrics.theme}>Ops, pagina não localizada</StTitulo>
          <Button theme={metrics.theme} text="Ir Inicio" href="/" />
        </StBase>
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
