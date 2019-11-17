import React from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { ModalBox, Box, Header, Title, Body } from "./styles";
import close from "../../../assets/icons/close.svg";
import { closeModal } from "../../../redux/actions/modais";

const Modal = ({ idModal, title, body }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.modais[idModal], []);
  const { show, onCloseModal } = data || {};

  if (!show) {
    return <></>;
  }

  const onClickCloseModal = () => {
    dispatch(closeModal(idModal));
    if (onCloseModal) onCloseModal();
  };

  return createPortal(
    <ModalBox>
      <Box>
        <Header>
          <Title>{title}</Title>
          <div className="close">
            <img src={close} alt="close" onClick={onClickCloseModal} />
          </div>
        </Header>
        <Body idModal={idModal}>{body}</Body>
      </Box>
    </ModalBox>,
    document.getElementById("modal-root")
  );
};

export default Modal;
