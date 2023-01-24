import BookingForm from "./BookingForm";
import { useState } from 'react';

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState({
    date: "",
    time: "17:00",
  });
    return (
      <div className="booking-page">
        <h1>Book now!</h1>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
    </div>
  );
};

export default BookingPage;