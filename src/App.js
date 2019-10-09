import React from 'react';
import {useRoutes} from 'hookrouter';
import  HomePage from './containers/HomePage'

const routes = {
  '/': () => <HomePage />,
  // '/products/:id': ({id}) => <ProductDetails id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);
  
  return routeResult;
}

export default App;