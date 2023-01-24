import { useState } from 'react';

function BookingForm({ availableTimes, setAvailableTimes}) {
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('Birthday');

    // SUBMIT HANDLER
    const handleSubmit = e => {
      e.preventDefault();

      console.log(`
      Date: ${availableTimes.date},
      Time: ${availableTimes.time},
      Number of Guests: ${guests},
      Occasion: ${occasion}`);

      setAvailableTimes({
        date: "",
        time: "17:00"
      });
      setGuests('');
      setOccasion('Birthday');
    };

    // ONCHANGE HANDLER FOR DATE AND TIME
    const handleChange = e => {
        setAvailableTimes({ ...availableTimes, [e.target.name]: e.target.value });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={availableTimes.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                name='time'
                value={availableTimes.time}
                onChange={handleChange}
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                value={guests}
                onChange={e => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}>
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