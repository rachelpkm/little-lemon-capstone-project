import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import { fetchAPI } from '../utils/temp';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
      <div className="booking-page">
        <h1>Book now!</h1>
        <BookingForm
          availableTimes={availableTimes} dispatch={dispatch}
        />
    </div>
  );
};

export default BookingPage;