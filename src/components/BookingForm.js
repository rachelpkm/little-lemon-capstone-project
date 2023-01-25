import { useState, useEffect } from 'react';
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
    useEffect(() => {
        localStorage.setItem('Bookings', JSON.stringify(bookings));
    }, [bookings]);

    // FORM VALIDATION
    const getIsFormValid = () => {
        return(
            bookings.date !== '' &&
            bookings.time !== '' &&
            bookings.guests !== ''
        );
    };

    // SUBMIT HANDLER
    const handleSubmit = e => {
      e.preventDefault();

    // SUBMIT LOGIC
    if (getIsFormValid) {
        submitAPI();
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
        console.log("THERE IS AN ERROR");
        }
    }

    // HANDLING MULTIPLE INPUTS
    const handleChange = e => {
        const { name, value } = e.target;
        setBookings({ ...bookings, [name]: value });
    };

    return(
        <form className="booking-form" onSubmit={handleSubmit} aria-label="On Submit">
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
                required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name='time'
                value={bookings.time}
                onChange={handleChange}
                aria-label="On Change"
                required
            >
                {times.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                min="1" max="10"
                id="guests"
                name='guests'
                placeholder="Number of guests"
                value={bookings.guests}
                onChange={handleChange}
                aria-label="On Change"
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            name='occasion'
            value={bookings.occasion}
            onChange={handleChange}
            aria-label="On Change"
            required>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Wedding</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" className="submit-btn" id="submit-btn" disabled={!getIsFormValid()}>
                Lets Go
            </button>
        </form>
    );
}

export default BookingForm;