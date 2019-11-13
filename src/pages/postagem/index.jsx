import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Controller from "./components/Controller";

import { StContainer } from "./styles";

const Objeto = () => {
  const theme = "light";
  const [editandoRegistro, setEditandoRegistro] = useState(false);
  const [inserindoRegistro, setInserindoRegistro] = useState(false);
  const { dados } = useSelector(state => state.router.location.state || 0);
  const MenuRight = [
    {
      title: editandoRegistro ? "Cancelar" : "Escrever",
      onClick: () => {
        setEditandoRegistro(!editandoRegistro);
      }
    },
    {
      title: editandoRegistro ? "Salvar" : "Edição",
      onClick: () => {
        setEditandoRegistro(!editandoRegistro);
        console.log("ok", dados);
      }
    }
  ];

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
        MenuRight={MenuRight}
      />
      <Banner height={10} />
      <Body background={"#e5e5e5"} color={"#000"}>
        <Controller
          dados={dados}
          theme={theme}
          editandoRegistro={editandoRegistro}
          inserindoRegistro={inserindoRegistro}
        />
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
