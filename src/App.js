import React, { useReducer } from 'react';
import {useRoutes} from 'hookrouter';
import  HomePage from './containers/HomePage'
import DetailPage from './containers/DetailPage'
import MasterLayout from './containers/MasterLayout'
import { CarProvider } from './providers/carProvider'
import { carReducer } from './reducers/carReducer'

const initialState = {
  cars: [],
  car: {},
  compare: []
}

const routes = {
  '/': () => <MasterLayout component={HomePage} showText={true} />,
  '/cars/:id': ({id}) => <MasterLayout component={DetailPage} id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);

  const state = useReducer(carReducer, initialState)

  return (
    <CarProvider value={state}>
      {routeResult}
    </CarProvider>
  )
}

export default App;