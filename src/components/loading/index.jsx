import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import LoadingBox from "../generics/loading";

import { AppContext } from "../../context";

// import { Container } from './styles';

const Loading = () => {
  const [isLoading, setLoading] = useState(false);
  const state = useSelector(state => state);
  const { loadingMessage } = useContext(AppContext);
  useEffect(() => {
    let loading = Object.keys(state).filter(key => state[key].loading);
    setLoading(loading.length > 0);
  }, [state]);
  return isLoading && loadingMessage ? (
    <LoadingBox text={loadingMessage} fixed />
  ) : (
    <> </>
  );
};

export default Loading;
