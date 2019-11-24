import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/modais";
import { StContainer } from "./styles";
import ShowAcesso from "../show/showAcesso";

const Container = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openModal("ShowAcesso", {}));
  }, []);

  return (
    <StContainer>
      <ShowAcesso />
      {props.children}
    </StContainer>
  );
};

export default Container;
