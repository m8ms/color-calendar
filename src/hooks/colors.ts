import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAndDispatch } from "../utils";
import { colorsSelector } from "../store/selectors/colorsSelectors";
import { getColors } from "../api/colors";
import { setColors } from "../store/actions/colorsActions";

export const useColorsFetchAndDispatch = (): Color[] => {
  const colors = useSelector(colorsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!colors) {
      fetchAndDispatch(getColors, setColors, dispatch);
    }
  }, [colors]);

  return colors;
};
