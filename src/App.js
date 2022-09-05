import React  from 'react';

// Redux store
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Landing from './Landing';

const App = () => {

  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
};

export default App;