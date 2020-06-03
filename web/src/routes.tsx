import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreatePoint from './pages/CreatePoint';
import CreatedPoint from './pages/CreatedPoint';
import Home from './pages/Home';

const Routes = () => {
  return( 
    <BrowserRouter>
      <Route  component={Home} path="/" exact/>
      <Route  component={CreatePoint} path="/create-point" exact/>
      <Route  component={CreatedPoint} path="/create-point/created" />
    </BrowserRouter>
  );
}

export default Routes;