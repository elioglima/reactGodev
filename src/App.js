import React from 'react';
import { Provider } from 'react-redux'
import Routes from './routes'
import { store } from './redux'
import ContextWrapper from './components/contextWrapper'

function App() {
  return (
    <Provider store={store} >
      <ContextWrapper>
        <div className="App">
          <div className="page">
            <Routes />
          </div>
        </div>
      </ContextWrapper>
    </Provider>
  );
}

export default App;
