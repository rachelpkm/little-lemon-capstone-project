import companyLogo from './images/logo.svg';

function Nav() {
    return(
        <nav>
            <ul>
                <img className='logo' src={companyLogo} alt="logo" />
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