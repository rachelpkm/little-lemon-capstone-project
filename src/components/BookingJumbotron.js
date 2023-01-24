import restaurant1 from './images/restaurant.jpg';
import restaurant2 from './images/restaurant2.jpg';

function BookingJumbotron() {
    return(
        <div className="booking-jumbotron">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>Find a table for any occasion</h3>
            <div className='booking-jumbotron-images'>
                <img src={restaurant1} className="rest1" alt="restaurant"/>
                <img src={restaurant2} className="rest2" alt="restaurant"/>
            </div>
        </div>
    )
}
export default BookingJumbotron;