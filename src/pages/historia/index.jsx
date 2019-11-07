import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "./components/Banner";
import Footer from "../components/Footer";
import ListaDestaques from "../components/listaDestaques";

import {
  StContainer,
  StHeader,
  StBase1,
  StHistoriaTitulo,
  StTituloImg,
  StTexto,
  StDesenvolvedor,
  StBirthDate,
  StHistoria,
  StRecomendados,
  StRecomendadosTitulo
} from "./styles";

const Objeto = () => {

  const theme = 'light'
  const dispatch = useDispatch()
  const [registro, setRegistro] = useState(0);
  const { id } = useSelector(state => state.router.location.state || 0)

  useEffect(() => {
    const Dados = require("../../temp/infos.json");
    let DadosSel = Dados.find(v => v.id == id)
    if (!DadosSel) return dispatch(push('/'))
    DadosSel.image = require('../../tools/img/' + DadosSel.icon)
    setRegistro(DadosSel);
  }, [id]);

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Banner height={10} />
      <Body
        paddingVertical={'0'}
        paddingHorizontal={'5%'}
        background={"#e5e5e5"}
        color={"#000"}
      >
        <StHistoria>
          <StHistoriaTitulo>História</StHistoriaTitulo>
          <StHeader>
            <StBase1>
              <div>
                <span>Nome</span>
                <span>Categoria</span>
                <span>Desenvolvedor</span>
                <span>Ano:</span>
              </div>
              <div>
                <span>{registro.name}</span>
                <span>{registro.category}</span>
                <span>{registro.desenvolvedor}</span>
                <span>{registro.birthdate}</span>
              </div>
            </StBase1>
            <StTituloImg><img src={registro.image} width='100px' height='100px' /></StTituloImg>
          </StHeader>
          <StTexto>{registro.description}</StTexto>
        </StHistoria>

        <StRecomendados>
          <StRecomendadosTitulo>Recomendados</StRecomendadosTitulo>
          <ListaDestaques width="100%" theme={theme} colCount={3} />
        </StRecomendados>

      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
