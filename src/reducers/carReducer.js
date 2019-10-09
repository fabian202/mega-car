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
        car: state.rawCars.find(item => item.id == action.id)
      };
    case "COMPARE_CAR" :
      return {
        ...state,
        compare: [...state.compare, action.car]
      }

    default:
      break;
  }
};
