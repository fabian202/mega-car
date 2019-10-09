import { useContext } from "react";
import { CarContext } from "../providers/carProvider";

export const useCarContext = () => {
  const [state, dispatch] = useContext(CarContext);
  return {
      state,
      dispatch
  }
};