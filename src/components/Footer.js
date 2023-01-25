import logoFooter from './images/logo1.png';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <nav className='footer-container'>
                <img src={logoFooter} className="footer-logo" alt="logo" />
                <ul className='grid-item-nav'>
                    <p>Little Lemon</p>
                    <li><Link to="/" className="nav-item" >Home</Link></li>
                    <li><Link to='/about-us' className="nav-item">About</Link></li>
                    <li><Link to='/menu' className="nav-item">Menu</Link></li>
                    <li><Link to='/reservations' className="nav-item">Reservations</Link></li>
                    <li><Link to='/online-order' className="nav-item">Online Order</Link></li>
                    <li><Link to='/login' className="nav-item">Login</Link></li>
                </ul>
                <ul className='grid-item-contact'>
                    <p>Contact</p>
                    <address>
                        Little Lemon
                        <br />
                        123 S Chicago
                        <br />
                        Street Chicago, Illinois 987654
                        <br />
                        USA
                        <li><Link to='mailto:littlelemon@restaurant.com' className="nav-item">littlelemon@restaurant.com</Link></li>
                        <li><Link to='tel:+1234567890' className="nav-item">(123) 456-7890</Link></li>
                        <li><Link to='mailto:littlelemon@bookings.com' className="nav-item">littlelemon@bookings.com</Link></li>
                    </address>
                </ul>
                <ul className='grid-item-social'>
                    <p>Follow us</p>
                    <li><Link to='instagram.com' target={'_blank'} rel='noreferrer' className="nav-item">Instagram</Link></li>
                    <li><Link to='twitter.com' target={'_blank'} rel='noreferrer' className="nav-item">Twitter</Link></li>
                    <li><Link to='facebook.com' target={'_blank'} rel='noreferrer' className="nav-item">Facebook</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;