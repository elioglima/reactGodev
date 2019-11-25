import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/modais";
import { StContainer } from "./styles";
import ShowAcesso from "../show/showAcesso";

const Container = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (require("../../libs/fn_cookies").ler("token").length == 0)
      dispatch(openModal("ShowAcesso", {}));
  }, []);

  return (
    <StContainer>
      <ShowAcesso />
      {console.log(require("../../libs/fn_cookies").ler("token"))}
      {props.children}
    </StContainer>
  );
};

export default Container;
