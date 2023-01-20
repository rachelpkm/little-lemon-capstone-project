import logoFooter from './images/logo_footer.png';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <nav className='footer-container'>
                <img src={logoFooter} className="footer-img" alt="logo" />
                <ul className='grid-item-nav'>
                    <p>Little Lemon</p>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about-us'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/online-order'>Online Order</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                <ul className='grid-item-contact'>
                    <p>Contact</p>
                    <address>
                        You may also want to visit us:
                        <br />
                        Little Lemon
                        <br />
                        123 S Chicago
                        <br />
                        Street Chicago, Illinois 987654
                        <br />
                        USA
                        <li><Link to='mailto:littlelemon@restaurant.com'>littlelemon@restaurant.com</Link></li>
                        <li><Link to='tel:+1234567890'>(123) 456-7890</Link></li>
                        <li><Link to='mailto:littlelemon@bookings.com'>littlelemon@bookings.com</Link></li>
                    </address>
                </ul>
                <ul className='grid-item-social'>
                    <p>Follow us</p>
                    <li><Link to='instagram.com' target={'_blank'} rel='noreferrer'>Instagram</Link></li>
                    <li><Link to='twitter.com' target={'_blank'} rel='noreferrer'>Twitter</Link></li>
                    <li><Link to='facebook.com' target={'_blank'} rel='noreferrer'>Facebook</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;