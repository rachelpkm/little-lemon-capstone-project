import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OnlineOrder from './pages/OnlineOrder';
import Login from './pages/Login';

function Main() {
    return(
        <main>
            <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/about-us" element={<About />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/reservations" element={<Reservations />}></Route>
                    <Route path="/online-order" element={<OnlineOrder />}></Route>
                    <Route path="/login" element={<Login />}></Route>
            </Routes>
        </main>
    );
}

export default Main;