import { createAction } from "redux-actions";

export const setHolidays = createAction<HolidaysMap | {} | null>(
  "cc/holidays/setHoliday"
);

//
// export const fetchHolidays = (cityId: number) => async (dispatch: Dispatch) => {
//   try {
//     const weather = await getWeather(cityId);
//     dispatch(setHolidays(weather));
//   } catch (e) {
//     console.log("ERROR_WEATHER_FETCH:", e);
//   }
// };
