import React, { useState } from "react";
import { AppContext } from "../../context";

let defaultMessage = "Carregando...";
export default props => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(defaultMessage);

  function toggleOpenModalLogin() {
    setOpenModalLogin(openModalLogin => !openModalLogin);
  }

  const changeLoadingMessage = message =>
    setLoadingMessage(message === "default" ? defaultMessage : message);

  return (
    <AppContext.Provider
      value={{
        openModalLogin,
        toggleOpenModalLogin,
        loadingMessage,
        changeLoadingMessage
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
