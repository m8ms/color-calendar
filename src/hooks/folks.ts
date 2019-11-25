import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allFolksSelector } from "../store/selectors/folksSelectors";
import { getFolks } from "../api/folks";
import { setFolks } from "../store/actions/folksActions";

export const useGetOrFetchFolks = (): Folk[] => {
  const folks = useSelector(allFolksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!folks) {
      (async () => {
        const res: any = await getFolks();

        dispatch(
          setFolks(res.data.map(({ _id, name }) => ({ id: _id, name })))
        );
      })();
    }
  }, [folks]);

  return folks;
};
