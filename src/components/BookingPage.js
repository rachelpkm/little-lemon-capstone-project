import BookingForm from "./BookingForm";
import { useReducer } from 'react';

const updateTimes = (state, action) => {
  // For now, the function can return the same available times regardless of the date.
  return { ...state };
};

const initializeTimes = () => {
  return { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };
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