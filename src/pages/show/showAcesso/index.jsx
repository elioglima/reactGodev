import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/generics/button";
import Modal from "../../../components/generics/modal";
import { closeModal } from "../../../redux/actions/modais";
import { StContainer, StBox, StBaseBotoes } from "./styles";
import EmailInput from "../../components/Generics/TextInput";
import SenhaInput from "../../components/Generics/TextInput";
import { acEntrarSistema } from "../../../redux/actions/acesso/actionAcesso";

const Objeto = () => {
  const idModal = "ShowAcesso";
  const dispatch = useDispatch();
  const theme = useSelector(state => state.metrics.theme, "loght");
  const data = useSelector(state => state.modais[idModal], []);
  const { tryAgain, tryAgainParams, retorno, descNoOk, descOK, title } =
    data || {};

  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");

  const [msgTela, setMsgTela] = useState(
    <p>Parece que houve um erro, nenhuma msg informada.</p>
  );

  useEffect(() => {
    if (retorno) setMsgTela(<p>{retorno}</p>);
  }, [retorno]);

  const onClick = e => {
    e.preventDefault();
    dispatch(closeModal(idModal));
    dispatch(acEntrarSistema({ email, senha }));
  };

  let body = (
    <StContainer>
      <StBox>
        <EmailInput
          margin={"10px 0"}
          inputPadding={"10px 10px"}
          titulo={"E-mail"}
          value={email}
          placeholder={"informe o e-mail..."}
        />
        <SenhaInput
          margin={"10px 0"}
          inputPadding={"10px 10px"}
          titulo={"Senha"}
          value={senha}
          placeholder={"informe a senha..."}
        />
        <StBaseBotoes>
          <Button
            modo={"cancelar"}
            text={"Fechar"}
            onClick={() => {
              dispatch(closeModal(idModal));
            }}
          />
          <Button modo={"sucesso"} text={"Entrar"} onClick={onClick} />
        </StBaseBotoes>
      </StBox>
    </StContainer>
  );

  return (
    <Modal
      idModal={idModal}
      modo={"escuro"}
      title={title || "Acesso ao Sistema"}
      body={body}
    />
  );
};

export default Objeto;
