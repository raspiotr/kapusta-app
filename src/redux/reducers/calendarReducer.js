import { createSelector } from 'reselect';

// Definicja początkowego stanu
const initialState = {
  selectedDate: new Date(),
  // inne właściwości stanu kalendarza
};

// Akcje
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

// Reducer
const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    // obsługa innych akcji
    default:
      return state;
  }
};

// Akcje kreatorów
export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});

// Selektory
const selectCalendarState = state => state.calendar;

export const selectSelectedDate = createSelector(
  [selectCalendarState],
  calendar => calendar.selectedDate
);

// Dodajemy nowe selektory dla miesiąca i roku
export const selectSelectedMonth = createSelector(
  [selectSelectedDate],
  selectedDate => selectedDate.getMonth()
);

export const selectSelectedYear = createSelector(
  [selectSelectedDate],
  selectedDate => selectedDate.getFullYear()
);

export default calendarReducer;
