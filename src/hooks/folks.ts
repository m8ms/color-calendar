import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allFolksSelector } from "../store/selectors/folksSelectors";
import { getFolk, getFolks } from "../api/folks";
import { setFolks } from "../store/actions/folksActions";
import { folkColorsSelector } from "../store/selectors/colorsPerFolkSelectors";
import { fetchAndDispatch } from "../utils";
import { setColorsPerFolk } from "../store/actions/colorsPerFolkActions";

export const useGetOrFetchFolks = (): Folk[] => {
  const folks = useSelector(allFolksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!folks) {
      fetchAndDispatch(getFolks, setFolks, dispatch);
    }
  }, [folks]);

  return folks;
};

export const useGetOrFetchCurrentFolkColors = () => {
  const dispatch = useDispatch();
  const { folkId } = useParams();
  const colors = useSelector(folkColorsSelector(folkId));

  useEffect(() => {
    if (!colors && folkId) {
      fetchAndDispatch(
        () => getFolk(folkId),
        data => setColorsPerFolk({ [folkId]: data.colors }),
        dispatch
      );
    }
  }, [folkId]);
  return colors;
};
