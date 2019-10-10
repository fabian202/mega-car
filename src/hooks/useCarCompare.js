import { useCarContext } from "./useCarContext";

export const useCarCompare = () => {
  const {  dispatch } = useCarContext();

  return {
    handleCompare: car => {
      console.log("compare", car);
      dispatch({
        type: "COMPARE_CAR",
        car
      });
    }
  };
};
