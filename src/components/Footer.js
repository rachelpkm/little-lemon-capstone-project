import logoFooter from './images/logo1.png';
import { Link } from 'react-router-dom';

const linkStyleFooter = {
    color: "white",
    fontFamily: "'Karla', sansSerif",
    fontSize: "20px",
}

function Footer() {
    return(
        <footer>
            <nav className='footer-container'>
                <img src={logoFooter} className="footer-logo" alt="logo" />
                <ul className='grid-item-nav'>
                    <p>Little Lemon</p>
                    <li><Link to="/" style={linkStyleFooter}>Home</Link></li>
                    <li><Link to='/about-us' style={linkStyleFooter}>About</Link></li>
                    <li><Link to='/menu' style={linkStyleFooter}>Menu</Link></li>
                    <li><Link to='/reservations' style={linkStyleFooter}>Reservations</Link></li>
                    <li><Link to='/online-order' style={linkStyleFooter}>Online Order</Link></li>
                    <li><Link to='/login' style={linkStyleFooter}>Login</Link></li>
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
                        <li><Link to='mailto:littlelemon@restaurant.com' style={linkStyleFooter}>littlelemon@restaurant.com</Link></li>
                        <li><Link to='tel:+1234567890' style={linkStyleFooter}>(123) 456-7890</Link></li>
                        <li><Link to='mailto:littlelemon@bookings.com' style={linkStyleFooter}>littlelemon@bookings.com</Link></li>
                    </address>
                </ul>
                <ul className='grid-item-social'>
                    <p>Follow us</p>
                    <li><Link to='instagram.com' target={'_blank'} rel='noreferrer' style={linkStyleFooter}>Instagram</Link></li>
                    <li><Link to='twitter.com' target={'_blank'} rel='noreferrer' style={linkStyleFooter}>Twitter</Link></li>
                    <li><Link to='facebook.com' target={'_blank'} rel='noreferrer' style={linkStyleFooter}>Facebook</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;