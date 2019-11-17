import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button";
import { Container } from "./styles";
import Modal from "../modal";
import { closeModal } from "../../../redux/actions/modais";

const MsgConfirm = () => {
  const idModal = "MsgConfirm";
  const dispatch = useDispatch();
  const data = useSelector(state => state.modais[idModal], []);
  const { tryAgain, tryAgainParams, retorno } = data || {};
  const [msgErro, setMsgErro] = useState(
    <p>
      Parece que houve um erro ao recuperar os dados. <br /> Tente novamente
      mais tarde.
    </p>
  );

  useEffect(() => {
    if (retorno) setMsgErro(<p>{retorno}</p>);
  }, [retorno]);

  const onClick = e => {
    if (tryAgain) {
      e.preventDefault();
      dispatch(closeModal(idModal));
      tryAgain(tryAgainParams);
    }
  };

  let body = (
    <Container>
      <span>Ops!</span>
      {msgErro}
      <Button text="Tentar novamente" href="/" onClick={onClick} />
    </Container>
  );

  return (
    <Modal idModal={idModal} title="Erro ao recuperar dados" body={body} />
  );
};

export default MsgConfirm;
