import companyLogo from './images/logo.svg';
import hamburgerMenu from './images/icon _hamburgermenu_.svg';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <a href='/'>
                <img className='hamburger-menu' src={hamburgerMenu} alt="logo" />
            </a>
            <ul className='nav-links-container'>
                <li>
                    <Link to='/'>
                        <img className='logo' src={companyLogo} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/online-order">Online Order</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;