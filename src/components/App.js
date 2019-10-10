import React, { useReducer } from 'react';
import {useRoutes} from 'hookrouter';
import routes from './routes'
import { CarProvider } from '../providers/carProvider'
import { carReducer } from '../reducers/carReducer'

const initialState = {
  cars: [],
  car: {},
  compare: []
}

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