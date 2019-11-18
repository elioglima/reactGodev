import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./redux";
import ContextWrapper from "./components/contextWrapper";
import Loading from "./components/loading";
import ErrorMessage from "./components/generics/errorMessage";
import MsgConfirm from "./components/generics/msgConfirm";

function App() {
  return (
    <Provider store={store}>
      <ContextWrapper>
        <div className="App">
          <div className="page">
            <ErrorMessage />
            <MsgConfirm />
            <Loading />
            <Routes />
          </div>
        </div>
      </ContextWrapper>
    </Provider>
  );
}

export default App;
