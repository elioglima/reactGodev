import React, { useState, useEffect } from "react";
import { StContainer } from "./styles";
import Navigation from "./Navigation";
import Content from "./Content";

const Objeto = props => {
  return (
    <StContainer {...props}>
      <Navigation {...props} />
      <Content {...props} />
    </StContainer>
  );
};

export default Objeto;
