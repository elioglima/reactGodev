import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "../components/Body";
import Banner from "./components/Banner";
import Footer from "../components/Footer";

import { StContainer, StHeader, StTitulo } from "./styles";

const Objeto = () => {
  const [registro, setRegistro] = useState(0);

  useEffect(() => {
    const Dados = require("../../temp/infos.json");
    setRegistro(Dados[0]);
  }, []);

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Body
        banner={Banner}
        bannerHeight={10}
        background={"#e5e5e5"}
        color={"#000"}
      >
        <StHeader>
          <StTitulo>{registro.catefory}</StTitulo>
        </StHeader>
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
