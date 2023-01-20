import companyLogo from './images/logo.svg';
import hamburgerMenu from './images/icon _hamburgermenu_.svg'

function Nav() {
    return(
        <nav>
            <a href='/'>
                <img className='hamburger-menu' src={hamburgerMenu} alt="logo" />
            </a>
            <ul className='nav-links-container'>
                <li>
                    <a href='/'>
                        <img className='logo' src={companyLogo} alt="logo" />
                    </a>
                </li>
                <li>
                    <a href="/">Homepage</a>
                </li>
                <li>
                    <a href="/about-us">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/online-order">Online Order</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;