import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { StContainer } from "./styles";

const Icon = props => {
  const dispatch = useDispatch();
  return (
    <StContainer
      size={props.size}
      height={(props.size / -100) * props.size + props.size}
    >
      <img
        src={props.src}
        onClick={() => dispatch(push(props.route, { id: props.id }))}
      />
    </StContainer>
  );
};

export default Icon;
