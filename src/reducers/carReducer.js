import _ from "lodash";

const filteredCars = (brand, state) => {
  const cars = _.filter(
    state.rawCars,
    item => item.brand.toLowerCase().indexOf(brand.toLowerCase()) > -1
  );

  return {
    ...state,
    cars
  };
};

const addCompare = (car, state) => {
  if(!state.compare.filter(item => item.id === car.id).length && state.compare.length < 3) {
    return {
      ...state,
      compare: [...state.compare, car]
    }
  }
  return {
    ...state
  }
}

const removeCompare = (id, state) => {
  const compare = state.compare.filter(item => item.id !== parseInt(id))

  return {
    ...state,
    compare
  }
}

export const carReducer = (state, action) => {
  switch (action.type) {
    case "LIST_CARS":
      return {
        ...state,
        rawCars: action.cars
      };
    case "FILTER_CARS":
      return filteredCars(action.brand, state);
    case "DETAILS_CAR":
      console.log(action, state);
      return {
        ...state,
        car: state.rawCars.find(item => item.id === parseInt(action.id))
      };
    case "COMPARE_CAR" :
      return addCompare(action.car, state)
    case "COMPARE_REMOVE" :
      return removeCompare(action.id, state)

    default:
      break;
  }
};
