import React, { useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import CalendarToolbarUI from "./CalendarToolbarUI";
import { useGetOrFetchFolks } from "../../hooks/folks";

const CalendarToolbarContainer: React.FC = () => {
  const folks: Folk[] | null = useGetOrFetchFolks();
  const { folkId } = useParams();
  const history = useHistory();

  const onFolkSelect = useCallback(({ value }) => {
    history.push("/c/" + (value || ""));
  }, []);

  return (
    <CalendarToolbarUI
      onFolkSelect={onFolkSelect}
      folks={folks}
      currentFolkId={folkId}
    />
  );
};

export default CalendarToolbarContainer;
