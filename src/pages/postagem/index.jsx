import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Controller from "./components/Controller";
import { postagemSalvar } from "../../redux/actions/postagem/actionSalvar";
import { openModal } from "../../redux/actions/modais";

import { StContainer } from "./styles";

const Objeto = () => {
  const theme = "light";
  const dispatch = useDispatch();

  const [registro, setRegistro] = useState({});
  const [stepCurr, setStepCurr] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [editandoRegistro, setEditandoRegistro] = useState(true);
  const [inserindoRegistro, setInserindoRegistro] = useState(false);

  const postagem = useSelector(state => state.router.location.state.postagem);
  useEffect(() => {
    if (!postagem) return;
    setRegistro(postagem);
    setStepCount(postagem.stepsCount);
  }, [postagem]);

  const setStep = v => {
    if (v < 0) return;
    if (v > stepCount - 1) return;
    setStepCurr(v); // navega entre as steps
  };

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
        if (editandoRegistro) {
          dispatch(
            openModal("errorMessage", {
              retorno: "Deseja salvar as alterações?",
              tryAgain: params => {
                dispatch(postagemSalvar(params));
                setEditandoRegistro(!editandoRegistro);
              },
              tryAgainParams: {
                registro,
                editandoRegistro,
                inserindoRegistro
              }
            })
          );
        } else setEditandoRegistro(!editandoRegistro);
      }
    }
  ];

  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
        MenuRight={MenuRight}
        registro={registro}
      />
      <Banner height={10} />
      <Body background={"#e5e5e5"} color={"#000"}>
        <Controller
          theme={theme}
          registro={registro}
          stepCurr={stepCurr}
          setStep={setStep}
          stepCount={stepCount}
          editandoRegistro={editandoRegistro}
          inserindoRegistro={inserindoRegistro}
        />
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
