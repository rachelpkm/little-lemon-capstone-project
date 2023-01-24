import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../utils/temp';

function BookingForm({ availableTimes, dispatch }) {
    const navigate = useNavigate();
    const { times } = availableTimes;
    const [bookings, setBookings] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: 'Birthday'
    });
    const [isFormValid, setIsFormValid] = useState(true);

    // SUBMIT HANDLER
    const handleSubmit = e => {
      e.preventDefault();

    // SUBMIT LOGIC
    if ((bookings.date, bookings.time, bookings.guests !== '')) {
        submitAPI(isFormValid);
        navigate('/confirmation');

      console.log(`
        Date: ${bookings.date},
        Time: ${bookings.time},
        Number of Guests: ${bookings.guests},
        Occasion: ${bookings.occasion}`);

    // RESET VALUE
        setBookings({
        date: '',
        time: '',
        guests: '',
        occasion: 'Birthday',
      });
    } else {
        setIsFormValid(!isFormValid);
        console.log("THERE IS AN ERROR");
        }
    }

    // HANDLING MULTIPLE INPUTS
    const handleChange = e => {
        const { name, value } = e.target;
        setBookings({ ...bookings, [name]: value });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={bookings.date}
                onChange={e => {
                    setBookings({ ...bookings, date: e.target.value });
                    dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
                  }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                name='time'
                value={bookings.time}
                onChange={handleChange}
            >
                {times.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                name='guests'
                value={bookings.guests}
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            name='occasion'
            value={bookings.occasion}
            onChange={handleChange}>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Wedding</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;