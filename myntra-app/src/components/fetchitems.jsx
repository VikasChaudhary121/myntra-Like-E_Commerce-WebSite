import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemsAction } from "../store/items";
import { FetchStatusAction } from "../store/fetchingStatus";
import LoadingSpinner from "./LoadingSpinner";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.FetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusAction.markFetching());
    fetch("http://localhost:8081/items", { signal })
      .then((result) => result.json())
      .then((items) => {
        dispatch(FetchStatusAction.markFetchDone());
        dispatch(FetchStatusAction.markFetchingDone());
        dispatch(ItemsAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
