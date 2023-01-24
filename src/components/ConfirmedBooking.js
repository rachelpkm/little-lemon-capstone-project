import { useEffect, useState } from "react";

function ConfirmedBooking() {
    const [reservedDetails, setReservedDetails] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('Bookings');
        if (data !== null) setReservedDetails(JSON.parse(data));
    }, []);

    return(
        <div className="confirmation-page">
            <h1>Your booking is confirmed!</h1>
            <p><strong>Date:</strong> {reservedDetails.date}</p>
            <p><strong>Time:</strong> {reservedDetails.time}</p>
            <p><strong>Guests:</strong> {reservedDetails.guests}</p>
            <p><strong>Occasion:</strong> {reservedDetails.occasion}</p>
        </div>
    )
}

export default ConfirmedBooking;