import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../context";

let defaultMessage = "Carregando...";
export default props => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(defaultMessage);
  const theme = useSelector(state => state.metrics.theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
