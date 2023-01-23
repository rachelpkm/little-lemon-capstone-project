import { useState } from 'react';

function BookingForm() {
    const [availableDates, setAvailableDates] = useState('');
    const [availableTimes, setAvailableTimes] = useState('17:00');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('Birthday');

    // SUBMIT HANDLER
    const handleSubmit = e => {
      e.preventDefault();

      console.log(`
      Date: ${availableDates},
      Time: ${availableTimes},
      Number of Guests: ${guests},
      Occasion: ${occasion}`);

      setAvailableDates('');
      setAvailableTimes('17:00');
      setGuests('');
      setOccasion('Birthday');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={availableDates}
                onChange={e => setAvailableDates(e.target.value)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                value={availableTimes}
                onChange={e => setAvailableTimes(e.target.value)}
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