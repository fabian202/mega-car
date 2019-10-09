import { useState, useEffect } from "react";
import { useCarContext } from "./useCarContext";
import carsData from "../data/cars.json";
import _ from "lodash";
import { useDebounce } from "use-debounce";

export const useCarList = () => {
  const { state, dispatch } = useCarContext();
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  useEffect(() => {
    dispatch({
      type: "LIST_CARS",
      cars: _.sortBy(carsData.data, "brand")
    });
  }, []);

  useEffect(() => {
      dispatch({
        type: "FILTER_CARS",
        brand: value
      });
  }, [value]);

  return {
    cars: state.cars,
    handleChange: e => {
      setSearch(e.target.value);
    },
    compare: state.compare
  };
};
