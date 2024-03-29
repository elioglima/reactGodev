import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button";
import Modal from "../modal";
import { closeModal } from "../../../redux/actions/modais";
import { StContainer, StRetorno, StBaseBotoes } from "./styles";

const MsgConfirm = () => {
  const idModal = "MsgConfirm";
  const dispatch = useDispatch();
  const theme = useSelector(state => state.metrics.theme, "loght");
  const data = useSelector(state => state.modais[idModal], []);
  const { tryAgain, tryAgainParams, retorno, descNoOk, descOK, title } =
    data || {};
  const [msgTela, setMsgTela] = useState(
    <p>Parece que houve um erro, nenhuma msg informada.</p>
  );

  useEffect(() => {
    if (retorno) setMsgTela(<p>{retorno}</p>);
  }, [retorno]);

  const onClick = e => {
    if (tryAgain) {
      e.preventDefault();
      dispatch(closeModal(idModal));
      tryAgain(tryAgainParams);
    }
  };

  let body = (
    <StContainer>
      <StRetorno>{msgTela}</StRetorno>
      <StBaseBotoes>
        <Button
          modo={"cancelar"}
          text={descNoOk ? descNoOk : "Não"}
          onClick={() => {
            dispatch(closeModal(idModal));
          }}
        />
        <Button
          modo={"sucesso"}
          color={"ok"}
          text={descOK ? descOK : "Sim"}
          onClick={onClick}
        />
      </StBaseBotoes>
    </StContainer>
  );

  return (
    <Modal
      idModal={idModal}
      title={title || "Confirmação do Sistema"}
      body={body}
    />
  );
};

export default MsgConfirm;
