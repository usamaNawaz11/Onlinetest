// App.js

import React from 'react';

import Stackk from './Navigation/Stackk';
import { Provider } from 'react-redux';
import Store from './reduxtoolkit/Store';


const App = () => {
  return (
    <Provider store={Store}>
   <Stackk/>
   </Provider>
  );
};

export default App;
