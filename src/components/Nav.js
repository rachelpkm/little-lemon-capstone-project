import companyLogo from './images/logo.svg';
import hamburgerMenu from './images/icon _hamburgermenu_.svg';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: "#495E57",
}

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
                    <Link to="/" style={linkStyle}>Homepage</Link>
                </li>
                <li>
                    <Link to="/about-us" style={linkStyle}>About</Link>
                </li>
                <li>
                    <Link to="/menu" style={linkStyle}>Menu</Link>
                </li>
                <li>
                    <Link to="/reservations" style={linkStyle}>Reservations</Link>
                </li>
                <li>
                    <Link to="/online-order" style={linkStyle}>Online Order</Link>
                </li>
                <li>
                    <Link to="/login" style={linkStyle}>Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;